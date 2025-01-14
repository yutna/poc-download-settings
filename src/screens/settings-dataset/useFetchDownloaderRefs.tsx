import { useEffect } from "react";

import { getDownloaderIdRefs } from "@/api/downloaders";

import type { Dispatch } from "react";
import type { Action, State } from "./types";

export default function useFetchDownloaderRefs({
  state,
  dispatch,
}: {
  state: State;
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    if (state.changeAndImport.downloaderId) {
      getDownloaderIdRefs(state.changeAndImport.downloaderId).then(
        (payload) => {
          dispatch({
            type: "SET_PROCESS_FILES",
            payload: payload.processFiles,
          });
          dispatch({
            type: "SET_PROCESS_FOLDERS",
            payload: payload.processFolders,
          });
        },
      );
    }

    // TODO : clear effect to initial state here ??
    // return () => {
    //
    // };
  }, [dispatch, state.changeAndImport.downloaderId]);
}
