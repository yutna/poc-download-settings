import { useEffect } from "react";

import type { Dispatch } from "react";
import type { Action, State } from "./types";

export default function useUpdateDriverTemplate({
  dispatch,
  state,
}: {
  dispatch: Dispatch<Action>;
  state: State;
}) {
  useEffect(() => {
    const id = state.downloaderDriver.driverId;
    const isUnselectedDriverId = id === undefined;

    if (isUnselectedDriverId) {
      dispatch({ type: "SET_DRIVER_TEMPLATE", payload: undefined });
      return;
    }

    const driver = state.temp.driverDropdown.data.find(
      (driver) => driver.id === id
    );

    dispatch({
      type: "SET_DRIVER_TEMPLATE",
      payload: driver?.context.driverTemplate,
    });
  }, [
    dispatch,
    state.downloaderDriver.driverId,
    state.temp.driverDropdown.data,
  ]);
}
