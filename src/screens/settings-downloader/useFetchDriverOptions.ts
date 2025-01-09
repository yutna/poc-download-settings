import { useEffect } from "react";

import {
  NON_STANDARD_OPTIONS,
  POST_PROCESSING,
  STANDARD_OPTIONS,
} from "./fixtures";

import type { Dispatch } from "react";
import type { Action, State } from "./types";

export default function useFetchDropdownOptions({
  dispatch,
  state,
}: {
  dispatch: Dispatch<Action>;
  state: State;
}) {
  useEffect(() => {
    // TODO: fetch downloader driver options
    // TODO: implement clear data when driver change
    switch (state.downloaderDriver.downloaderDriverType) {
      case "STANDARD":
        dispatch({
          type: "SET_DRIVER_OPTIONS",
          payload: STANDARD_OPTIONS,
        });

        dispatch({
          type: "SET_DATA_ENTRY_FORMAT",
          payload: "SELF_FILL_DATA_ENTRY",
        });
        break;
      case "NON_STANDARD":
        dispatch({
          type: "SET_DRIVER_OPTIONS",
          payload: NON_STANDARD_OPTIONS,
        });
        break;
      case "POST_PROCESSING":
        dispatch({
          type: "SET_DRIVER_OPTIONS",
          payload: POST_PROCESSING,
        });

        dispatch({
          type: "SET_TIMEOUT_SECONDS",
          payload: 0,
        });
        break;
      default:
        throw new Error("Unknown download driver option");
    }
  }, [dispatch, state.downloaderDriver.downloaderDriverType]);
}
