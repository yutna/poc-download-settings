import { useEffect } from "react";

import { getDownloaderDropdown } from "@/api/downloaders";

import type { Dispatch } from "react";
import type { Action } from "./types";

export default function useFetchDownloaderDropdown({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    getDownloaderDropdown().then((payload) => {
      dispatch({
        type: "SET_DOWNLOADER_DROPDOWN",
        payload,
      });
    });

    // TODO : clear effect to initial state here ??
    // return () => {
    //
    // };
  }, [dispatch]);
}
