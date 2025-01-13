export enum DatasetFieldSettingStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface FormDatasetFieldSettingsData {
  destinationColumn: string;
  destinationOptions: {
    type: string;
    status: boolean;
  };
  sourceOptions: {
    sourceColumn: string;
    transform: {
      method: string;
    };
  };
}

export interface FormDatasetFieldSettingsProps {
  data: Array<FormDatasetFieldSettingsData>;
  onDestinationColumnChange: (
    payload: DatasetFieldSettingsDestinationColumn,
  ) => void;
  onSourceOptionTransformMethodChange: (
    payload: DatasetFieldSettingsSourceOptionTransformMethod,
  ) => void;
  onDestinationOptionType: (
    payload: DatasetFieldSettingsDestinationOptionType,
  ) => void;
  onSourceOptionSourceColumn: (
    payload: DatasetFieldSettingsSourceOptionSourceColumn,
  ) => void;
  onFieldSettingsStatusChange: (payload: DatasetFieldSettingsStatus) => void;
  onAppendNewFieldSetting: (payload: FormDatasetFieldSettingsData) => void;
}

export interface DatasetFieldSettingsSourceOptionSourceColumn
  extends BaseFieldSettings {
  value: string;
}

export interface DatasetFieldSettingsDestinationOptionType
  extends BaseFieldSettings {
  value: string;
}

export interface DatasetFieldSettingsSourceOptionTransformMethod
  extends BaseFieldSettings {
  value: string;
}

export interface DatasetFieldSettingsDestinationColumn
  extends BaseFieldSettings {
  value: string;
}

export interface DatasetFieldSettingsStatus extends BaseFieldSettings {
  value: boolean;
}

export interface BaseFieldSettings {
  index: number;
}
