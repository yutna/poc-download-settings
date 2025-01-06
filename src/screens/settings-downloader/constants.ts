import type { State } from "./types";

export const initialState: State = {
  general: {
    agencyId: 1,
    agencyOptions: [],
    downloader: "",
    downloaderDescription: "",
    downloaderType: "external",
    status: true,
  },
  dataStorageFolder: {
    dataSubType: "",
    dataType: "",
    downloaderFileIds: [],
    downloaderFileOptions: [],
    storagePreview: "",
  },
};
