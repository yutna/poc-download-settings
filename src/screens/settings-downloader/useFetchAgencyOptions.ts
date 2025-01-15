import { useEffect } from "react";

import { getAgencies } from "@/api/agencies";

import type { Dispatch } from "react";
import type { Locale } from "@/types/locale";
import type { Action } from "./types";

export default function useFetchAgencyOptions({
  dispatch,
  locale,
}: {
  dispatch: Dispatch<Action>;
  locale: Locale;
}) {
  useEffect(() => {
    dispatch({
      type: "SET_TEMP_AGENCIES",
      payload: { data: [], isPending: true },
    });

    getAgencies().then((agencies) => {
      dispatch({
        type: "SET_TEMP_AGENCIES",
        payload: {
          data: agencies,
          isPending: false,
        },
      });

      const options = agencies.map((agency) => ({
        label: agency.label[locale],
        value: agency.id.toString(),
      }));

      dispatch({
        type: "SET_AGENCY_OPTIONS",
        payload: options,
      });

      if (options.length > 0) {
        dispatch({
          type: "SET_AGENCY_ID",
          payload: Number(options[0].value),
        });
      }
    });
  }, [dispatch, locale]);
}
