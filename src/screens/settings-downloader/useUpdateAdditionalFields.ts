import { useEffect } from "react";

import type { ParameterRow } from "@/components/form-process-settings";

import { convertRowsToObject } from "./helpers";

import type { Dispatch } from "react";
import type { Action } from "./types";

export default function useUpdateAdditionalFields({
  dispatch,
  parameterRows,
}: {
  dispatch: Dispatch<Action>;
  parameterRows: ParameterRow[];
}) {
  useEffect(() => {
    const payload = convertRowsToObject(parameterRows);
    dispatch({ type: "SET_PARAMETER", payload });
  }, [dispatch, parameterRows]);
}
