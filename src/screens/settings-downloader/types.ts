import type { FormDataStorageFolderData } from "@/components/form-data-storage-folder";
import type {
  DownloaderType,
  FormGeneralSettingsData,
} from "@/components/form-general-settings";
import type { Option } from "@/types/settings-downloader";

export type Action =
  | { type: "SET_AGENCY_ID"; payload: number }
  | { type: "SET_AGENCY_OPTIONS"; payload: Option[] }
  | { type: "SET_DATA_SUB_TYPE"; payload: string }
  | { type: "SET_DATA_TYPE"; payload: string }
  | { type: "SET_DOWNLOADER"; payload: string }
  | { type: "SET_DOWNLOADER_DESCRIPTION"; payload: string }
  | { type: "SET_DOWNLOADER_FILE_IDS"; payload: number[] }
  | { type: "SET_DOWNLOADER_FILE_OPTIONS"; payload: Option[] }
  | { type: "SET_DOWNLOADER_TYPE"; payload: DownloaderType }
  | { type: "SET_STATUS"; payload: boolean }
  | { type: "SET_STORAGE_PREVIEW"; payload: string };

export type DataStorageFolder = Omit<
  FormDataStorageFolderData,
  "agencyId" | "agencyOptions"
>;

export interface State {
  general: FormGeneralSettingsData;
  dataStorageFolder: DataStorageFolder;
}
