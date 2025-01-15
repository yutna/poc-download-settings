import type { Option } from "@/types/form";

export interface FormDataStorageFolderData {
  agencyId: number | undefined;
  agencyOptions: Option[];
  dataSubType: string;
  dataType: string;
  downloaderFileIds: number[];
  downloaderFileOptions: Option[];
  storagePreview: string[];
}

export interface FormDataStorageFolderProps {
  data: FormDataStorageFolderData;
  disabled: boolean;
  onDataSubTypeChange: (value: string) => void;
  onDataTypeChange: (value: string) => void;
  onDownloaderFileChange: (values: number[]) => void;
}
