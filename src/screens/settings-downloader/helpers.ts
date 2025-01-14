import { trim } from "radash";

import type { ParameterRow } from "@/components/form-process-settings";
import type { State } from "./types";

export function convertRowsToObject(
  rows: ParameterRow[]
): Record<string, string> {
  return rows.reduce((acc, { key, value }) => {
    if (key.trim() !== "") {
      acc[key] = value;
    }

    return acc;
  }, {} as Record<string, string>);
}

export function convertStateToSchemaFormat(state: State) {
  return {
    agencyId: state.general.agencyId,
    dataSubType: trim(state.dataStorageFolder.dataSubType),
    dataType: trim(state.dataStorageFolder.dataType),
    downloader: trim(state.general.downloader),
    downloaderDescription: trim(state.general.downloaderDescription),
    downloaderDriver: {
      additionalFields: state.downloaderDriver.hasParameter
        ? Object.fromEntries(
            Object.entries(state.downloaderDriver.parameter || {}).map(
              ([key, value]) => [trim(key), trim(value)]
            )
          )
        : {},
      downloaderDriverType: state.downloaderDriver.downloaderDriverType,
      fields: {
        password: state.downloaderDriver.password,
        username: state.downloaderDriver.username,
      },
      host: trim(state.downloaderDriver.host),
      timeoutSeconds: state.downloaderDriver.timeoutSeconds,
      driverId: state.downloaderDriver.driverId,
    },
    downloaderFileIds: state.dataStorageFolder.downloaderFileIds,
    downloaderType: state.general.downloaderType,
    retryCount: state.download.retryCount,
    scheduleInterval: trim(state.download.scheduleInterval),
    status: state.general.status ? "ACTIVE" : "INACTIVE",
  };
}

export function getParameterRows(
  parameter: Record<string, string>
): ParameterRow[] {
  const rows = Object.entries(parameter).map(([k, v]) => ({
    key: k,
    value: v,
  }));

  rows.push({ key: "", value: "" });

  return rows;
}
