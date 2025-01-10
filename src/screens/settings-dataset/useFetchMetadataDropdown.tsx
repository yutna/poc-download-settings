import { useEffect } from "react";

import { getMetadataDropdown } from "@/api/metadata";

import type { Dispatch } from "react";
import type { Action } from "./types";

export default function useFetchMetadataDropdown({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    getMetadataDropdown().then((payload) => {
      dispatch({
        type: "SET_METADATA_DROPDOWN",
        payload,
      });
    });

    // TODO : clear effect to initial state here ??
    // return () => {
    //
    // };
  }, [dispatch]);
}
