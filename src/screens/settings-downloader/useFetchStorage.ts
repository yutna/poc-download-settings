import { useEffect } from "react";

import { postDownloaderDataFolder } from "@/api/downloaders";

import type { Dispatch } from "react";
import type { Action, State } from "./types";

export default function useFetchStorage({
  dispatch,
  state,

  delay = 500,
}: {
  dispatch: Dispatch<Action>;
  state: State;

  delay?: number;
}) {
  const { agencyId } = state.general;
  const {
    dataSubType,
    dataType,
    downloaderFileIds: fileIds,
  } = state.dataStorageFolder;

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const isValid =
      agencyId && fileIds.length && dataSubType.trim() && dataType.trim();

    if (isValid) {
      timeout = setTimeout(() => {
        postDownloaderDataFolder({
          agencyId,
          dataSubType,
          dataType,
          fileIds,
        }).then((payload) => {
          dispatch({ type: "SET_STORAGE_PREVIEW", payload });
        });
      }, delay);
    } else {
      dispatch({ type: "SET_STORAGE_PREVIEW", payload: "" });
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [agencyId, dataSubType, dataType, delay, dispatch, fileIds]);
}
