import { useEffect } from "react";

import { getDownloaderFileDropdown } from "@/api/downloaders";

import type { Dispatch } from "react";
import type { Action } from "./types";

export default function useFetchDownloaderFileOptions({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    getDownloaderFileDropdown().then((payload) => {
      dispatch({
        type: "SET_DOWNLOADER_FILE_OPTIONS",
        payload,
      });
    });
  }, [dispatch]);
}
