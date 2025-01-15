import { FormDatasetFieldSettingsData } from "@/components/form-dataset-field-settings";
import { FormDatasetGeneralSettingsData } from "@/components/form-dataset-general-settings";

import type { FormDatasetChangeAndImportData } from "@/components/form-dataset-change-and-import/types";
import type {
  DatasetFieldSettingsDestinationColumn,
  DatasetFieldSettingsDestinationOptionType,
  DatasetFieldSettingsSourceOptionSourceColumn,
  DatasetFieldSettingsSourceOptionTransformKwargs,
  DatasetFieldSettingsSourceOptionTransformMethod,
  DatasetFieldSettingsStatus,
  KwargsConstantPayload,
  KwargsCustomPayload,
} from "@/components/form-dataset-field-settings/types";
import type {
  DatasetDropdownOption,
  MetadataDropdownOption,
} from "@/types/form";

export type Action =
  | { type: "SET_DATASET_ID"; payload: number }
  | { type: "SET_DATASET"; payload: string }
  | { type: "SET_DATASET_DESCRIPTION"; payload: string }
  | { type: "SET_GENERAL_SETTING_STATUS"; payload: boolean }
  | { type: "SET_FIELD"; payload: string }
  | { type: "SET_DATASET_TRANSFORM_ID"; payload: number }
  | { type: "SET_HEADER_ROW"; payload: number }
  | { type: "SET_DOWNLOADER_ID"; payload: number }
  | { type: "SET_PROCESS_FILES"; payload: Array<string> }
  | { type: "SET_PROCESS_FOLDERS"; payload: Array<string> }
  | { type: "SET_METADATA_ID"; payload: number }
  | { type: "SET_DATASET_DISPLAY"; payload: string }
  | { type: "SET_DESTINATION_UNIQUE_KEY"; payload: string }
  | { type: "SET_DESTINATION_PARTITION_COLUMN"; payload: string }
  | { type: "SET_DESTINATION_NULL_OPTION"; payload: string }
  | { type: "SET_METADATA_DROPDOWN"; payload: MetadataDropdownOption[] }
  | { type: "SET_DATASET_TRANSFORM_DROPDOWN"; payload: DatasetDropdownOption[] }
  | { type: "SET_DOWNLOADER_DROPDOWN"; payload: DatasetDropdownOption[] }
  | {
    type: "SET_DATASET_FIELD_SETTING_DESTINATION_COLUMN";
    payload: DatasetFieldSettingsDestinationColumn;
  }
  | {
    type: "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_TRANSFORM_METHOD";
    payload: DatasetFieldSettingsSourceOptionTransformMethod;
  }
  | {
    type: "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_TRANSFORM_KWARGS";
    payload: DatasetFieldSettingsSourceOptionTransformKwargs;
  }
  | {
    type: "SET_KWARGS_CONSTANT_VALUE";
    payload: KwargsConstantPayload;
  }
  | {
    type: "SET_KWARGS_CUSTOM_EVAL";
    payload: KwargsCustomPayload;
  }
  | {
    type: "SET_DATASET_FIELD_SETTING_DESTINATION_OPTION_TYPE";
    payload: DatasetFieldSettingsDestinationOptionType;
  }
  | {
    type: "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_SOURCE_COLUMN";
    payload: DatasetFieldSettingsSourceOptionSourceColumn;
  }
  | {
    type: "SET_DATASET_FIELD_SETTING_STATUS";
    payload: DatasetFieldSettingsStatus;
  }
  | {
    type: "APPEND_DATASET_NEW_FIELD_SETTING";
    payload: FormDatasetFieldSettingsData;
  }
  | {
    type: "SET_ENTIRE_DATASET_FORM";
    payload: State;
  };

export interface State {
  editable: boolean;
  datasetId: number | undefined;
  general: FormDatasetGeneralSettingsData;
  changeAndImport: FormDatasetChangeAndImportData;
  fieldSettings: Array<FormDatasetFieldSettingsData>;
}
