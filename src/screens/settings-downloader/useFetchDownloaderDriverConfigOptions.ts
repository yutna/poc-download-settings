import { useEffect } from "react";

import { getDownloaderDriverConfigDropdown } from "@/api/downloaders";

import type { Dispatch } from "react";
import type { Option } from "@/types/form";
import type { Action, State } from "./types";

export default function useFetchDownloaderDriverConfigOptions({
  dispatch,
  state,
}: {
  dispatch: Dispatch<Action>;
  state: State;
}) {
  useEffect(() => {
    dispatch({ type: "SET_DOWNLOADER_DRIVER_CONFIG_ID", payload: undefined });
    dispatch({ type: "SET_DOWNLOADER_DRIVER_CONFIG_OPTIONS", payload: [] });
    dispatch({ type: "SET_USERNAME", payload: "" });
    dispatch({ type: "SET_PASSWORD", payload: "" });

    if (
      state.downloaderDriver.dataEntryFormat === "SELECT_FROM_SETTINGS" &&
      state.downloaderDriver.driverId
    ) {
      dispatch({
        type: "SET_TEMP_DRIVER_CONFIG",
        payload: { data: [], isPending: true },
      });

      getDownloaderDriverConfigDropdown(state.downloaderDriver.driverId).then(
        (data) => {
          const options: Option[] = data.map((item) => ({
            label: item.label,
            value: item.id.toString(),
          }));

          dispatch({
            type: "SET_DOWNLOADER_DRIVER_CONFIG_OPTIONS",
            payload: options,
          });

          dispatch({
            type: "SET_TEMP_DRIVER_CONFIG",
            payload: { data, isPending: false },
          });
        }
      );
    }
  }, [
    dispatch,
    state.downloaderDriver.dataEntryFormat,
    state.downloaderDriver.driverId,
  ]);
}
