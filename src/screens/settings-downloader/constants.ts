import type { State } from "./types";

export const initialState: State = {
  general: {
    agencyId: 1,
    agencyOptions: [],
    downloader: "",
    downloaderDescription: "",
    downloaderType: "EXTERNAL",
    status: true,
  },
  dataStorageFolder: {
    dataSubType: "",
    dataType: "",
    downloaderFileIds: [],
    downloaderFileOptions: [],
    storagePreview: "",
  },
  download: {
    retryCount: 0,
    scheduleInterval: "",
    timePreview: "",
  },
  downloaderDriver: {
    commandSet: "",
    dataEntryFormat: "SELF_FILL_DATA_ENTRY",
    downloaderDriverConfigId: undefined,
    downloaderDriverConfigOptions: [],
    downloaderDriverType: "STANDARD",
    driverId: undefined,
    driverOptions: [],
    hasParameter: true,
    host: "",
    parameter: {
      pipelineId: "WP-001",
      flowRate: "1200 L/min",
      pressure: "3.5 bar",
      temperature: "25°C",
      material: "PVC",
      status: "Active",
      location: "Sector 5, Reservoir A",
      maintenanceDue: "2025-02-15",
    },
    password: "",
    timeoutSeconds: 0,
    username: "",
  },
};
