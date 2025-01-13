import type { DatasetDropdownOption } from "@/types/form";

export interface FormDatasetChangeAndImportData {
  // dataset transform
  datasetTransformId?: number;
  datasetTransformDropdown: Array<DatasetDropdownOption>;

  headerRow?: number;

  // downloader
  downloaderId?: number;
  downloaderDropdown: Array<DatasetDropdownOption>;

  // metadata
  metadataId?: number;
  metadataDropdown: Array<DatasetDropdownOption>;

  // destination
  destination: string;
  destinationUniqueKey: string;
  destinationPartitionColumn: string;
  destinationNullOption: string;
}

export interface FormDatasetChangeAndImportProps {
  data: FormDatasetChangeAndImportData;
  // onFieldChange: (payload: string) => void;
  // onSomeSelectChange: (payload: string) => void;

  onDatasetTransformIdChange: (payload: number) => void;
  onHeaderRowChange: (payload: number) => void;
  onDownloaderIdChange: (payload: number) => void;
  onMetadataIdChange: (payload: number) => void;

  onDestinationUniqueKeyChange: (payload: string) => void;
  onDestinationPartitionColumnChange: (payload: string) => void;
  onDestinationNullOptionChange: (payload: string) => void;
}
