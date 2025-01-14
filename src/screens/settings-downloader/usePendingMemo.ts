import { useMemo } from "react";

import type { State } from "./types";

export default function usePendingMemo({ state }: { state: State }) {
  const isPending = useMemo(() => {
    return (
      state.temp.agencies.isPending ||
      state.temp.downloaderFileDropdown.isPending ||
      state.temp.driverConfig.isPending ||
      state.temp.driverDropdown.isPending ||
      state.temp.isSubmitting ||
      state.temp.storage.isPending
    );
  }, [
    state.temp.agencies.isPending,
    state.temp.downloaderFileDropdown.isPending,
    state.temp.driverConfig.isPending,
    state.temp.driverDropdown.isPending,
    state.temp.isSubmitting,
    state.temp.storage.isPending,
  ]);

  return isPending;
}
