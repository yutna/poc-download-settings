export enum DataSetFieldSettingStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface FormDataSetFieldSettingsData {
  someField: string;
  status: boolean;
}

export interface FormDataSetFieldSettingsProps {
  data: Array<FormDataSetFieldSettingsData>;
  onSomeFieldChange: (payload: DataSetFieldSettingsSomeField) => void;
  onFieldSettingsStatusChange: (payload: DataSetFieldSettingsStatus) => void;
  onAppendNewFieldSetting: (payload: FormDataSetFieldSettingsData) => void;
}

export interface DataSetFieldSettingsSomeField extends BaseFieldSettings {
  value: string;
}

export interface DataSetFieldSettingsStatus extends BaseFieldSettings {
  value: boolean;
}

export interface BaseFieldSettings {
  index: number;
}
