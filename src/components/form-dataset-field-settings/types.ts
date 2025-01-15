export enum DatasetFieldSettingStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum TransformOptionsMethods {
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
    sourceColumnInput: string | null;
    transformOptions: {
      method: TransformOptionsMethods;
      kwargs:
      | Record<string, never>
      | KwargsConstant
      | KwargsCustom
      | KwargsDateTime
      | KwargsMapping;
      // | KwargsMappingNil;
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
  onDestinationOptionTypeChange: (
    payload: DatasetFieldSettingsDestinationOptionType,
  ) => void;
  onSourceOptionSourceColumnChange: (
    payload: DatasetFieldSettingsSourceOptionSourceColumn,
  ) => void;
  onFieldSettingsStatusChange: (payload: DatasetFieldSettingsStatus) => void;
  onAppendNewFieldSetting: (payload: FormDatasetFieldSettingsData) => void;
  onKwargsConstantValueChange: (payload: {
    index: number;
    value: number;
  }) => void;
  onKwargsCustomEvalChange: (payload: { index: number; value: string }) => void;
  onKwargsDateTimeFormatChange: (payload: KwargsDateTimePayload) => void;
}

export interface FormDatasetFieldDefaultProps {
  data: FormDatasetFieldSettingsData;
  index: number;
  disabled: boolean;
  onDestinationOptionTypeChange: (
    payload: DatasetFieldSettingsDestinationOptionType,
  ) => void;
  onSourceOptionSourceColumnChange: (
    payload: DatasetFieldSettingsSourceOptionSourceColumn,
  ) => void;
}

export interface FormDatasetFieldConstantProps {
  data: FormDatasetFieldSettingsData;
  index: number;
  disabled: boolean;
  onDestinationOptionTypeChange: (
    payload: DatasetFieldSettingsDestinationOptionType,
  ) => void;
  onKwargsConstantValueChange: (payload: {
    index: number;
    value: number;
  }) => void;
}

export interface FormDatasetFieldCustomProps {
  data: FormDatasetFieldSettingsData;
  index: number;
  disabled: boolean;
  onDestinationOptionTypeChange: (
    payload: DatasetFieldSettingsDestinationOptionType,
  ) => void;
  onKwargsCustomEvalChange: (payload: { index: number; value: string }) => void;
}

export interface FormDatasetFieldDateTimeProps {
  data: FormDatasetFieldSettingsData;
  index: number;
  disabled: boolean;
  onDestinationOptionTypeChange: (
    payload: DatasetFieldSettingsDestinationOptionType,
  ) => void;
  onKwargsDateTimeFormatChange: (payload: KwargsDateTimePayload) => void;
  onSourceOptionSourceColumnChange: (
    payload: DatasetFieldSettingsSourceOptionSourceColumn,
  ) => void;
}

export interface FormDatasetFieldMappingProps {
  data: FormDatasetFieldSettingsData;
  index: number;
  disabled: boolean;
  onDestinationOptionTypeChange: (
    payload: DatasetFieldSettingsDestinationOptionType,
  ) => void;
  onKwargsMappingFieldNameChange: (payload: KwargsMappingPayload) => void;
  onSourceOptionSourceColumnChange: (
    payload: DatasetFieldSettingsSourceOptionSourceColumn,
  ) => void;
}

export interface DatasetFieldSettingsSourceOptionSourceColumn
  extends BaseFieldSettings {
  value: string | null;
}

export interface DatasetFieldSettingsDestinationOptionType
  extends BaseFieldSettings {
  value: string;
}

export interface DatasetFieldSettingsSourceOptionTransformMethod
  extends BaseFieldSettings {
  value: TransformOptionsMethods;
}

export interface DatasetFieldSettingsSourceOptionTransformKwargs
  extends BaseFieldSettings {
  value: Record<string, never> | KwargsConstant | KwargsCustom | KwargsDateTime;
  // | KwargsMapping
  // | KwargsMappingNil;
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

export interface KwargsConstantPayload extends BaseFieldSettings {
  value: KwargsConstant;
}

export interface KwargsCustom {
  eval: string;
}

export interface KwargsCustomPayload extends BaseFieldSettings {
  value: KwargsCustom;
}

export interface KwargsDateTime {
  isCustom?: boolean;
  format?: string;
}

export interface KwargsDateTimePayload extends BaseFieldSettings {
  value: KwargsDateTime;
}

export interface KwargsMapping {
  fieldName: string;
  destinationMap: string;
  isCustomFunction: boolean;
  inputFieldValidation: string;
  options: Array<KwargsMappingOption> | Array<[]>;
}

export interface KwargsMappingOption {
  field: string;
  default: string;
}

export interface KwargsMappingPayload extends BaseFieldSettings {
  value: KwargsMapping;
}

export interface KwargsMappingNil {
  fieldName: string;
  destinationMap: string;
  inputFieldValidation: string;
}

export interface KwargsMappingNilPayload extends BaseFieldSettings {
  value: KwargsMappingNil;
}
