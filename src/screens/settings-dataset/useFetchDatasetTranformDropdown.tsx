import { useEffect } from "react";

import { getDatasetTransformDropdown } from "@/api/dataset-transform";

import type { Dispatch } from "react";
import type { Action } from "./types";

export default function useFetchDatasetTransformDropdown({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    getDatasetTransformDropdown().then((payload) => {
      dispatch({
        type: "SET_DATASET_TRANSFORM_DROPDOWN",
        payload,
      });
    });

    // TODO : clear effect to initial state here ??
    // return () => {
    //
    // };
  }, [dispatch]);
}
