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
    dataEntryFormat: "SELF_FILL_DATA_ENTRY",
    downloaderDriverConfigId: undefined,
    downloaderDriverConfigOptions: [],
    downloaderDriverType: "STANDARD",
    driverId: undefined,
    driverOptions: [],
    host: "",
    password: "",
    timeoutSeconds: 0,
    username: "",
  },
};
