import { useEffect } from "react";

import type { Dispatch } from "react";
import type { Action } from "./types";

export default function useFetchDownloaderFileOptions({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    // TODO: fetch downloader file options
    dispatch({
      type: "SET_DOWNLOADER_FILE_OPTIONS",
      payload: [
        { label: ".png", value: "1" },
        { label: ".jpg", value: "2" },
      ],
    });
  }, [dispatch]);
}
