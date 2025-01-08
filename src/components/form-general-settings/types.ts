import type { Option } from "@/types/settings-downloader";

export type DownloaderType = "INTERNAL" | "EXTERNAL";

export interface FormGeneralSettingsData {
  agencyId: number;
  agencyOptions: Option[];
  downloader: string;
  downloaderDescription: string;
  downloaderType: DownloaderType;
  status: boolean;
}

export interface FormGeneralSettingsProps {
  data: FormGeneralSettingsData;
  disabled: boolean;
  onAgencyChange: (agencyId: number) => void;
  onDownloaderChange: (value: string) => void;
  onDownloaderDescriptionChange: (value: string) => void;
  onDownloaderTypeChange: (value: DownloaderType) => void;
  onStatusChange: (status: boolean) => void;
}
