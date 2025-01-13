import { useEffect } from "react";

import type { Dispatch } from "react";
import type { Action, State } from "./types";

export default function useUpdateFields({
  dispatch,
  state,
}: {
  dispatch: Dispatch<Action>;
  state: State;
}) {
  useEffect(() => {
    if (state.downloaderDriver.downloaderDriverConfigId) {
      const config = state.temp.driverConfig.data.find((item) => item.id);
      const username = config!.context.fields.username;
      const password = config!.context.fields.password;

      dispatch({ type: "SET_USERNAME", payload: username });
      dispatch({ type: "SET_PASSWORD", payload: password });
    }
  }, [
    dispatch,
    state.downloaderDriver.downloaderDriverConfigId,
    state.temp.driverConfig.data,
  ]);
}
