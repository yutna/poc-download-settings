import { useEffect } from "react";

import type { Dispatch } from "react";
import type { Action } from "./types";

export default function useFetchAgencyOptions({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    // TODO: fetch agency options
    dispatch({
      type: "SET_AGENCY_OPTIONS",
      payload: [
        { label: "กรมทรัพยากรน้ำ", value: "1" },
        { label: "กรมเกลียว", value: "2" },
      ],
    });
  }, [dispatch]);
}
