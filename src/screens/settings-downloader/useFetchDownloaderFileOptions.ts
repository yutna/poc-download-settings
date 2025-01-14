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
    dispatch({
      type: "SET_TEMP_DOWNLOADER_FILE_DROPDOWN",
      payload: { data: [], isPending: true },
    });

    getDownloaderFileDropdown().then((files) => {
      const options = files.map((file) => ({
        label: file.label,
        value: file.id.toString(),
      }));

      dispatch({
        type: "SET_TEMP_DOWNLOADER_FILE_DROPDOWN",
        payload: { data: files, isPending: false },
      });

      dispatch({
        type: "SET_DOWNLOADER_FILE_OPTIONS",
        payload: options,
      });
    });
  }, [dispatch]);
}
