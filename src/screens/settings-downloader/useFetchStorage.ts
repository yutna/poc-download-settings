import { useEffect } from "react";

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
  const { dataSubType, dataType, downloaderFileIds } = state.dataStorageFolder;

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const isValid =
      agencyId &&
      downloaderFileIds.length &&
      dataSubType.trim() &&
      dataType.trim();

    if (isValid) {
      timeout = setTimeout(() => {
        // TODO: fetch storage preview
      }, delay);
    } else {
      dispatch({ type: "SET_STORAGE_PREVIEW", payload: "" });
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [
    agencyId,
    dataSubType,
    dataType,
    delay,
    dispatch,
    downloaderFileIds.length,
  ]);
}
