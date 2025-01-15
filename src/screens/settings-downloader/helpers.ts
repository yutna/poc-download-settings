import { trim } from "radash";

import type { ParameterRow } from "@/components/form-process-settings";
import type { SettingsDownloaderSchema } from "@/schemas/settingsDownloaderSchema";
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

function convertStatusToBoolean(status: "ACTIVE" | "INACTIVE"): boolean {
  return status === "ACTIVE";
}

export function convertSettingsDownloaderToInitialState(
  data: SettingsDownloaderSchema
): State {
  return {
    general: {
      agencyId: data.agencyId,
      agencyOptions: [],
      downloader: data.downloader,
      downloaderDescription: data.downloaderDescription,
      downloaderType: data.downloaderType,
      status: convertStatusToBoolean(data.status),
    },
    dataStorageFolder: {
      dataSubType: data.dataSubType,
      dataType: data.dataType,
      downloaderFileIds: data.downloaderFileIds,
      downloaderFileOptions: [],
      storagePreview: [],
    },
    download: {
      retryCount: data.retryCount,
      scheduleInterval: data.scheduleInterval,
      timePreview: "",
    },
    downloaderDriver: {
      commandSet: "",
      dataEntryFormat: "SELF_FILL_DATA_ENTRY",
      deleteOldFile: 0,
      downloaderDriverConfigId: undefined,
      downloaderDriverConfigOptions: [],
      downloaderDriverType: data.downloaderDriver.downloaderDriverType,
      driverId: data.downloaderDriver.driverId,
      driverOptions: [],
      driverTemplate: undefined,
      hasParameter: true,
      host: data.downloaderDriver.host,
      parameter: {
        ...data.downloaderDriver.additionalFields,
      },
      password: data.downloaderDriver.fields?.password ?? "",
      timeoutSeconds: data.downloaderDriver.timeoutSeconds,
      username: data.downloaderDriver.fields?.username ?? "",
    },
    temp: {
      agencies: {
        data: [],
        isPending: false,
      },
      driverConfig: {
        data: [],
        isPending: false,
      },
      driverDropdown: {
        data: [],
        isPending: false,
      },
      downloaderFileDropdown: {
        data: [],
        isPending: false,
      },
      isSubmitting: false,
      storage: {
        data: [],
        isPending: false,
      },
    },
  };
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
