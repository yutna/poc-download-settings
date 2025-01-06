import type { Option } from "@/types/settings-downloader";

export interface FormDataStorageFolderData {
  agencyId: number;
  agencyOptions: Option[];
  dataSubType: string;
  dataType: string;
  downloaderFileIds: number[];
  downloaderFileOptions: Option[];
  storagePreview: string;
}

export interface FormDataStorageFolderProps {
  data: FormDataStorageFolderData;
  disabled: boolean;
  onDataSubTypeChange: (value: string) => void;
  onDataTypeChange: (value: string) => void;
  onDownloaderFileChange: (values: number[]) => void;
}
