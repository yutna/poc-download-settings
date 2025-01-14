export interface FormDatasetGeneralSettingsData {
  dataset: string;
  datasetDescription: string;
  status: boolean;
}

export interface FormDatasetGeneralSettingsProps {
  data: FormDatasetGeneralSettingsData;
  disabled: boolean;
  onDatasetChange: (payload: string) => void;
  onDatasetDescriptionChange: (payload: string) => void;
  onDatasetGeneralSettingStatusChange: (payload: boolean) => void;
}
