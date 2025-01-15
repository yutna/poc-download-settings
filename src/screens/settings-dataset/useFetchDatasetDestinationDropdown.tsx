import { useEffect } from "react";

import { getDatasetDestinationDropdown } from "@/api/dataset";

import type { Dispatch } from "react";
import type { Action } from "./types";

export default function useFetchDatasetDestinationDropdown({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    getDatasetDestinationDropdown().then((payload) => {
      dispatch({
        type: "SET_DESTINATION_DROPDOWN",
        payload,
      });
    });

    // TODO : clear effect to initial state here ??
    // return () => {
    //
    // };
  }, [dispatch]);
}
