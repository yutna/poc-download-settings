export type DownloaderType = "internal" | "external";

export interface AgencyOptions {
  label: string;
  value: string;
}

export interface FormGeneralSettingsData {
  agencyId: number;
  agencyOptions: AgencyOptions[];
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
