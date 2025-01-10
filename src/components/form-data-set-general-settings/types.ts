export interface FormDataSetGeneralSettingsData {
  dataset: string;
  datasetDescription: string;
}

export interface FormDataSetGeneralSettingsProps {
  data: FormDataSetGeneralSettingsData;
  onDataSetChange: (payload: string) => void;
  onDataSetDescriptionChange: (payload: string) => void;
}
