import type { Action, State } from "./types";

export default function reducer(draft: State, action: Action) {
  switch (action.type) {
    // General Settings Form
    case "SET_AGENCY_ID":
      draft.general.agencyId = action.payload;
      break;
    case "SET_AGENCY_OPTIONS":
      draft.general.agencyOptions = action.payload;
      break;
    case "SET_DOWNLOADER":
      draft.general.downloader = action.payload;
      break;
    case "SET_DOWNLOADER_DESCRIPTION":
      draft.general.downloaderDescription = action.payload;
      break;
    case "SET_DOWNLOADER_TYPE":
      draft.general.downloaderType = action.payload;
      break;
    case "SET_STATUS":
      draft.general.status = action.payload;
      break;

    // Data Storage Folder Form
    case "SET_DATA_SUB_TYPE":
      draft.dataStorageFolder.dataSubType = action.payload;
      break;
    case "SET_DATA_TYPE":
      draft.dataStorageFolder.dataType = action.payload;
      break;
    case "SET_DOWNLOADER_FILE_IDS":
      draft.dataStorageFolder.downloaderFileIds = action.payload;
      break;
    case "SET_DOWNLOADER_FILE_OPTIONS":
      draft.dataStorageFolder.downloaderFileOptions = action.payload;
      break;
    case "SET_STORAGE_PREVIEW":
      draft.dataStorageFolder.storagePreview = action.payload;
      break;

    // Download Settings Form
    case "SET_RETRY_COUNT":
      draft.download.retryCount = action.payload;
      break;
    case "SET_SCHEDULE_INTERVAL":
      draft.download.scheduleInterval = action.payload;
      break;
    case "SET_TIME_PREVIEW":
      draft.download.timePreview = action.payload;
      break;

    // Process Settings
    case "SET_DOWNLOADER_DRIVER_TYPE":
      draft.process.downloaderDriverType = action.payload;
      break;

    default:
      throw new Error(`Unhandled action type`);
  }
}
