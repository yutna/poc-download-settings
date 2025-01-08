import { useEffect } from "react";

import type { Dispatch } from "react";
import type { Action, State } from "./types";

export default function useFetchDownloaderDriverConfigOptions({
  dispatch,
  state,
}: {
  dispatch: Dispatch<Action>;
  state: State;
}) {
  useEffect(() => {
    dispatch({ type: "SET_USERNAME", payload: "" });
    dispatch({ type: "SET_PASSWORD", payload: "" });

    if (state.downloaderDriver.dataEntryFormat === "SELECT_FROM_SETTINGS") {
      // TODO: fetch downloader driver config options
    }
  }, [dispatch, state.downloaderDriver.dataEntryFormat]);
}
