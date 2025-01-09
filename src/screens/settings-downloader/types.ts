import type { FormDataStorageFolderData } from "@/components/form-data-storage-folder";
import type { FormDownloadSettingsData } from "@/components/form-download-settings";
import type {
  DownloaderType,
  FormGeneralSettingsData,
} from "@/components/form-general-settings";
import type {
  DataEntryFormat,
  DownloaderDriverType,
  FormProcessSettingsData,
} from "@/components/form-process-settings";
import type { Option } from "@/types/form";

export type Action =
  | { type: "SET_AGENCY_ID"; payload: number }
  | { type: "SET_AGENCY_OPTIONS"; payload: Option[] }
  | { type: "SET_COMMAND_SET"; payload: string }
  | { type: "SET_DATA_ENTRY_FORMAT"; payload: DataEntryFormat }
  | { type: "SET_DATA_SUB_TYPE"; payload: string }
  | { type: "SET_DATA_TYPE"; payload: string }
  | { type: "SET_DOWNLOADER"; payload: string }
  | { type: "SET_DOWNLOADER_DESCRIPTION"; payload: string }
  | { type: "SET_DOWNLOADER_DRIVER_CONFIG_ID"; payload: number | undefined }
  | { type: "SET_DOWNLOADER_DRIVER_CONFIG_OPTIONS"; payload: Option[] }
  | { type: "SET_DOWNLOADER_DRIVER_TYPE"; payload: DownloaderDriverType }
  | { type: "SET_DOWNLOADER_FILE_IDS"; payload: number[] }
  | { type: "SET_DOWNLOADER_FILE_OPTIONS"; payload: Option[] }
  | { type: "SET_DOWNLOADER_TYPE"; payload: DownloaderType }
  | { type: "SET_DRIVER_ID"; payload: number }
  | { type: "SET_DRIVER_OPTIONS"; payload: Option[] }
  | { type: "SET_HOST"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_RETRY_COUNT"; payload: number }
  | { type: "SET_SCHEDULE_INTERVAL"; payload: string }
  | { type: "SET_STATUS"; payload: boolean }
  | { type: "SET_STORAGE_PREVIEW"; payload: string }
  | { type: "SET_TIME_PREVIEW"; payload: string }
  | { type: "SET_TIMEOUT_SECONDS"; payload: number }
  | { type: "SET_USERNAME"; payload: string };

export type DataStorageFolder = Omit<
  FormDataStorageFolderData,
  "agencyId" | "agencyOptions"
>;

export interface State {
  general: FormGeneralSettingsData;
  dataStorageFolder: DataStorageFolder;
  download: FormDownloadSettingsData;
  downloaderDriver: FormProcessSettingsData;
}
