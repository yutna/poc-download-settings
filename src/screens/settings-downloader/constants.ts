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
    storagePreview: [],
  },
  download: {
    retryCount: 0,
    scheduleInterval: "",
    timePreview: "",
  },
  downloaderDriver: {
    commandSet: "",
    dataEntryFormat: "SELF_FILL_DATA_ENTRY",
    deleteOldFile: 0,
    downloaderDriverConfigId: undefined,
    downloaderDriverConfigOptions: [],
    downloaderDriverType: "STANDARD",
    driverId: undefined,
    driverOptions: [],
    driverTemplate: undefined,
    hasParameter: true,
    host: "",
    parameter: {},
    password: "",
    timeoutSeconds: 0,
    username: "",
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
