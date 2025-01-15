import type {
  DatasetDropdownOption,
  MetadataDropdownOption,
} from "@/types/form";

export interface FormDatasetChangeAndImportData {
  // dataset transform
  datasetTransformId?: number;
  datasetTransformDropdown: Array<DatasetDropdownOption>;

  headerRow?: number;

  // downloader
  downloaderId?: number;
  downloaderDropdown: Array<DatasetDropdownOption>;
  processFiles: Array<string>;
  processFolders: Array<string>;
  datasetDisplay: string;

  // metadata
  metadataId?: number;
  metadataDropdown: Array<MetadataDropdownOption>;

  // destination
  destinationDropdown: Array<string>;
  destination: string;
  destinationUniqueKey: string;
  destinationPartitionColumn: string;
  destinationNullOption: string;
}

export interface FormDatasetChangeAndImportProps {
  data: FormDatasetChangeAndImportData;
  disabled: boolean;
  destinationFieldDisabled: boolean;

  onDatasetTransformIdChange: (payload: number) => void;
  onHeaderRowChange: (payload: number) => void;
  onDownloaderIdChange: (payload: number) => void;
  onMetadataIdChange: (payload: number) => void;

  onDestinationUniqueKeyChange: (payload: string) => void;
  onDestinationPartitionColumnChange: (payload: string) => void;
  onDestinationNullOptionChange: (payload: string) => void;
}
