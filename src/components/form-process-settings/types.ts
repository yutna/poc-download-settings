export type DownloaderDriverType =
  | "standard"
  | "non_standard"
  | "post_processing";

export interface FormProcessSettingsData {
  downloaderDriverType: DownloaderDriverType;
}

export interface FormProcessSettingsProps {
  data: FormProcessSettingsData;
  disabled: boolean;
  onDownloaderDriverType: (value: DownloaderDriverType) => void;
}
