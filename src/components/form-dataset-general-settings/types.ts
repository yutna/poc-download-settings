export interface FormDatasetGeneralSettingsData {
  dataset: string;
  datasetDescription: string;
}

export interface FormDatasetGeneralSettingsProps {
  data: FormDatasetGeneralSettingsData;
  disabled: boolean;
  onDatasetChange: (payload: string) => void;
  onDatasetDescriptionChange: (payload: string) => void;
}
