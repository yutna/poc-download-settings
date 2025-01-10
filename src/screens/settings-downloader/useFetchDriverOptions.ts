import { useEffect } from "react";

import { getDriverDropdown } from "@/api/drivers";

import type { Dispatch } from "react";
import type { Option } from "@/types/form";
import type { Action, State } from "./types";

export default function useFetchDropdownOptions({
  dispatch,
  state,
}: {
  dispatch: Dispatch<Action>;
  state: State;
}) {
  useEffect(() => {
    // TODO: implement clear data when driver change
    const driverType = state.downloaderDriver.downloaderDriverType;

    dispatch({
      type: "SET_TEMP_DRIVER_DROPDOWN",
      payload: { data: [], isPending: true },
    });

    getDriverDropdown(driverType).then((drivers) => {
      dispatch({
        type: "SET_TEMP_DRIVER_DROPDOWN",
        payload: { data: drivers, isPending: false },
      });

      const options: Option[] = drivers
        .filter((driver) => driver.context.driverTemplate.includes(driverType))
        .sort((a, b) => a.id - b.id)
        .map(({ id, label }) => ({ label, value: id.toString() }));

      dispatch({ type: "SET_DRIVER_ID", payload: undefined });
      dispatch({ type: "SET_DRIVER_OPTIONS", payload: options });
    });

    if (driverType === "STANDARD") {
      dispatch({
        type: "SET_DATA_ENTRY_FORMAT",
        payload: "SELF_FILL_DATA_ENTRY",
      });
    }

    if (driverType === "POST_PROCESSING") {
      dispatch({
        type: "SET_TIMEOUT_SECONDS",
        payload: 0,
      });
    }
  }, [dispatch, state.downloaderDriver.downloaderDriverType]);
}
