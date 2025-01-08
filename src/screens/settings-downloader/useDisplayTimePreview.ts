import cronstrue from "cronstrue";
import cronParser from "cron-parser";
import { useEffect } from "react";

import type { Dispatch } from "react";
import type { Action, State } from "./types";

export default function useDisplayTimePreview({
  dispatch,
  state,
}: {
  dispatch: Dispatch<Action>;
  state: State;
}) {
  useEffect(() => {
    const expression = state.download.scheduleInterval;

    if (!expression) {
      return dispatch({ type: "SET_TIME_PREVIEW", payload: "" });
    }

    try {
      cronParser.parseExpression(expression);
      const payload = cronstrue.toString(expression);

      dispatch({ type: "SET_TIME_PREVIEW", payload });
    } catch {
      dispatch({ type: "SET_TIME_PREVIEW", payload: "" });
    }
  }, [dispatch, state.download.scheduleInterval]);
}
