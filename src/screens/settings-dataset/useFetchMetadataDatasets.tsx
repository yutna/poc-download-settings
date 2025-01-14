import { useEffect } from "react";

import type { Dispatch } from "react";
import type { Action, State } from "./types";
import { getMetadataIdDatasets } from "@/api/metadata";

export default function useFetchMetadataDatasets({
  state,
  dispatch,
}: {
  state: State;
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    if (state.changeAndImport.metadataId) {
      getMetadataIdDatasets(state.changeAndImport.metadataId).then(
        (payload) => {
          dispatch({
            type: "SET_DATASET_DISPLAY",
            payload: payload.datasetDisplay,
          });
        },
      );
    }

    // TODO : clear effect to initial state here ??
    // return () => {
    //
    // };
  }, [dispatch, state.changeAndImport.metadataId]);
}
