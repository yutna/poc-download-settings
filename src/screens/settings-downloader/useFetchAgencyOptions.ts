import { useEffect } from "react";

import { getAgencies } from "@/api/agencies";

import type { Dispatch } from "react";
import type { Action } from "./types";

export default function useFetchAgencyOptions({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    getAgencies().then((payload) => {
      dispatch({
        type: "SET_AGENCY_OPTIONS",
        payload,
      });
    });
  }, [dispatch]);
}
