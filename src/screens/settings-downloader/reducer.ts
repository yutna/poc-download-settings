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
    case "SET_COMMAND_SET":
      draft.downloaderDriver.commandSet = action.payload;
      break;
    case "SET_DATA_ENTRY_FORMAT":
      draft.downloaderDriver.dataEntryFormat = action.payload;
      break;
    case "SET_DELETE_OLD_FILE":
      draft.downloaderDriver.deleteOldFile = action.payload;
      break;
    case "SET_DOWNLOADER_DRIVER_CONFIG_ID":
      draft.downloaderDriver.downloaderDriverConfigId = action.payload;
      break;
    case "SET_DOWNLOADER_DRIVER_CONFIG_OPTIONS":
      draft.downloaderDriver.downloaderDriverConfigOptions = action.payload;
      break;
    case "SET_DOWNLOADER_DRIVER_TYPE":
      draft.downloaderDriver.downloaderDriverType = action.payload;
      break;
    case "SET_DRIVER_ID":
      draft.downloaderDriver.driverId = action.payload;
      break;
    case "SET_DRIVER_OPTIONS":
      draft.downloaderDriver.driverOptions = action.payload;
      break;
    case "SET_DRIVER_TEMPLATE":
      draft.downloaderDriver.driverTemplate = action.payload;
      break;
    case "SET_HAS_PARAMETER":
      draft.downloaderDriver.hasParameter = action.payload;
      break;
    case "SET_HOST":
      draft.downloaderDriver.host = action.payload;
      break;
    case "SET_PARAMETER":
      draft.downloaderDriver.parameter = action.payload;
      break;
    case "SET_PASSWORD":
      draft.downloaderDriver.password = action.payload;
      break;
    case "SET_TIMEOUT_SECONDS":
      draft.downloaderDriver.timeoutSeconds = action.payload;
      break;
    case "SET_USERNAME":
      draft.downloaderDriver.username = action.payload;
      break;

    // Temp
    case "SET_TEMP_AGENCIES":
      draft.temp.agencies = action.payload;
      break;
    case "SET_TEMP_DRIVER_CONFIG":
      draft.temp.driverConfig = action.payload;
      break;
    case "SET_TEMP_DRIVER_DROPDOWN":
      draft.temp.driverDropdown = action.payload;
      break;
    case "SET_TEMP_DOWNLOADER_FILE_DROPDOWN":
      draft.temp.downloaderFileDropdown = action.payload;
      break;
    case "SET_TEMP_IS_SUBMITTING":
      draft.temp.isSubmitting = action.payload;
      break;
    case "SET_TEMP_STORAGE":
      draft.temp.storage = action.payload;
      break;

    default:
      throw new Error(`Unhandled action type`);
  }
}
