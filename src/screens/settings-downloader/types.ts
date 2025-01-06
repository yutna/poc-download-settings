import type {
  AgencyOptions,
  DownloaderType,
  FormGeneralSettingsData,
} from "@/components/form-general-settings";

export type Action =
  | { type: "SET_AGENCY_ID"; payload: number }
  | { type: "SET_AGENCY_OPTIONS"; payload: AgencyOptions[] }
  | { type: "SET_DOWNLOADER"; payload: string }
  | { type: "SET_DOWNLOADER_DESCRIPTION"; payload: string }
  | { type: "SET_DOWNLOADER_TYPE"; payload: DownloaderType }
  | { type: "SET_STATUS"; payload: boolean };

export interface State {
  general: FormGeneralSettingsData;
}
