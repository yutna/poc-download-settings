import type { ChangeEvent } from "react";
import type { Option } from "@/types/settings-downloader";

export type DataEntryFormat = "SELECT_FROM_SETTINGS" | "SELF_FILL_DATA_ENTRY";
export type DownloaderDriverType =
  | "STANDARD"
  | "NON_STANDARD"
  | "POST_PROCESSING";

export interface FormProcessSettingsData {
  dataEntryFormat: DataEntryFormat;
  downloaderDriverConfigId: number | undefined;
  downloaderDriverConfigOptions: Option[];
  downloaderDriverType: DownloaderDriverType;
  driverId: number | undefined;
  driverOptions: Option[];
  host: string;
  password: string;
  timeoutSeconds: number;
  username: string;
}

export interface FormProcessSettingsProps {
  data: FormProcessSettingsData;
  disabled: boolean;
  onDataEntryFormatChange: (value: DataEntryFormat) => void;
  onDownloaderDriverConfigChange: (value: number) => void;
  onDownloaderDriverTypeChange: (value: DownloaderDriverType) => void;
  onDriverChange: (value: number) => void;
  onHostChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onTimeoutSecondsChange: (value: number) => void;
  onUsernameChange: (value: string) => void;
}

export interface FormStandardDriverProps {
  data: FormProcessSettingsData;
  disabled: boolean;
  isSelectFromSettings: boolean;
  onDataEntryFormatChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onDownloaderDriverConfigChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onHostChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTimeoutSecondsChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
