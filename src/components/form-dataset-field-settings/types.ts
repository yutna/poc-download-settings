export enum DatasetFieldSettingStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum SourceOptionMethods {
  DEFAULT = "default",
  CONSTANT = "constant",
  CUSTOM = "custom",
  DATE_TIME = "datetime",
  MAPPING = "mapping",
  MAPPING_NIL = "mappingnil",
}

export interface FormDatasetFieldSettingsData {
  destinationColumn: string;
  destinationOptions: {
    type: string;
    status: boolean;
  };
  sourceOptions: {
    sourceColumnInput: string;
    transformOptions: {
      method: SourceOptionMethods;
      kwargs:
      | Record<string, never>
      | KwargsConstant
      | KwargsCustom
      | KwargsDateTime
      | KwargsMapping
      | KwargsMappingNil;
    };
  };
}

export interface FormDatasetFieldSettingsProps {
  data: Array<FormDatasetFieldSettingsData>;
  disabled: boolean;
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

export interface FormDatasetFieldConstantProps {
  data: FormDatasetFieldSettingsData;
  index: number;
  disabled: boolean;
  onDestinationOptionType: (
    payload: DatasetFieldSettingsDestinationOptionType,
  ) => void;
  onSourceOptionSourceColumn: (
    payload: DatasetFieldSettingsSourceOptionSourceColumn,
  ) => void;
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

export interface KwargsConstant {
  value: number;
}

export interface KwargsCustom {
  eval: string;
}

export interface KwargsDateTime {
  isCustom: boolean;
  format: string;
}

export interface KwargsMapping {
  fieldName: string;
  destinationMap: string;
  isCustomFunction: boolean;
  inputFieldValidation: string;
  options: Array<KwargsMappingOption> | Array<Record<string, never>>;
}

export interface KwargsMappingOption {
  field: string;
  default: string;
}

export interface KwargsMappingNil {
  fieldName: string;
  destinationMap: string;
  inputFieldValidation: string;
}
