export enum DatasetFieldSettingStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface FormDatasetFieldSettingsData {
  someField: string;
  status: boolean;
}

export interface FormDatasetFieldSettingsProps {
  data: Array<FormDatasetFieldSettingsData>;
  onSomeFieldChange: (payload: DatasetFieldSettingsSomeField) => void;
  onFieldSettingsStatusChange: (payload: DatasetFieldSettingsStatus) => void;
  onAppendNewFieldSetting: (payload: FormDatasetFieldSettingsData) => void;
}

export interface DatasetFieldSettingsSomeField extends BaseFieldSettings {
  value: string;
}

export interface DatasetFieldSettingsStatus extends BaseFieldSettings {
  value: boolean;
}

export interface BaseFieldSettings {
  index: number;
}
