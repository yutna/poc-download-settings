import {
  KwargsConstant,
  KwargsCustom,
  KwargsDateTime,
  KwargsMapping,
} from "@/components/form-dataset-field-settings/types";
import type { Action, State } from "./types";

export default function reducer(draft: State, action: Action) {
  switch (action.type) {
    case "SET_DATASET_ID":
      draft.datasetId = action.payload;
      break;

    // Data Set General Settings Form
    case "SET_DATASET":
      draft.general.dataset = action.payload;
      break;
    case "SET_DATASET_DESCRIPTION":
      draft.general.datasetDescription = action.payload;
      break;
    case "SET_GENERAL_SETTING_STATUS":
      draft.general.status = action.payload;
      break;

    // Data Set Change And Import Form
    case "SET_DATASET_TRANSFORM_ID":
      draft.changeAndImport.datasetTransformId = action.payload;
      break;
    case "SET_HEADER_ROW":
      draft.changeAndImport.headerRow = action.payload;
      break;
    case "SET_DOWNLOADER_ID":
      draft.changeAndImport.downloaderId = action.payload;
      break;
    case "SET_PROCESS_FILES":
      draft.changeAndImport.processFiles = action.payload;
      break;
    case "SET_PROCESS_FOLDERS":
      draft.changeAndImport.processFolders = action.payload;
      break;
    case "SET_METADATA_ID":
      draft.changeAndImport.metadataId = action.payload;
      break;
    case "SET_DATASET_DISPLAY":
      draft.changeAndImport.datasetDisplay = action.payload;
      break;
    case "SET_DESTINATION_UNIQUE_KEY":
      draft.changeAndImport.destinationUniqueKey = action.payload;
      break;
    case "SET_DESTINATION_PARTITION_COLUMN":
      draft.changeAndImport.destinationPartitionColumn = action.payload;
      break;
    case "SET_DESTINATION_NULL_OPTION":
      draft.changeAndImport.destinationNullOption = action.payload;
      break;
    case "SET_METADATA_DROPDOWN":
      draft.changeAndImport.metadataDropdown = action.payload;
      break;
    case "SET_DATASET_TRANSFORM_DROPDOWN":
      draft.changeAndImport.datasetTransformDropdown = action.payload;
      break;
    case "SET_DOWNLOADER_DROPDOWN":
      draft.changeAndImport.downloaderDropdown = action.payload;
      break;

    // Data Set Field Settings Form
    case "SET_DATASET_FIELD_SETTING_DESTINATION_COLUMN":
      draft.fieldSettings[action.payload.index].destinationColumn =
        action.payload.value;
      break;
    case "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_TRANSFORM_METHOD":
      draft.fieldSettings[
        action.payload.index
      ].sourceOptions.transformOptions.method = action.payload.value;
      break;
    case "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_TRANSFORM_KWARGS":
      draft.fieldSettings[
        action.payload.index
      ].sourceOptions.transformOptions.kwargs = action.payload.value;
      break;
    case "SET_DATASET_FIELD_SETTING_DESTINATION_OPTION_TYPE":
      draft.fieldSettings[action.payload.index].destinationOptions.type =
        action.payload.value;
      break;
    case "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_SOURCE_COLUMN":
      draft.fieldSettings[
        action.payload.index
      ].sourceOptions.sourceColumnInput = action.payload.value;
      break;
    case "SET_DATASET_FIELD_SETTING_STATUS":
      draft.fieldSettings[action.payload.index].destinationOptions.status =
        action.payload.value;
      break;
    case "APPEND_DATASET_NEW_FIELD_SETTING":
      draft.fieldSettings = [...draft.fieldSettings, action.payload];
      break;

    // Kwargs Reducer
    // Kwargs Constant Method
    case "SET_KWARGS_CONSTANT_VALUE":
      (
        draft.fieldSettings[action.payload.index].sourceOptions.transformOptions
          .kwargs as KwargsConstant
      ).value = action.payload.value;
      break;

    // Kwargs Custom Method
    case "SET_KWARGS_CUSTOM_EVAL":
      (
        draft.fieldSettings[action.payload.index].sourceOptions.transformOptions
          .kwargs as KwargsCustom
      ).eval = action.payload.value;
      break;

    // Kwargs Date Time Method
    case "SET_KWARGS_DATE_TIME_FORMAT":
      (
        draft.fieldSettings[action.payload.index].sourceOptions.transformOptions
          .kwargs as KwargsDateTime
      ).format = action.payload.value.format;
      break;

    // Kwargs Mapping Method
    case "SET_KWARGS_MAPPING_FIELD_NAME":
      (
        draft.fieldSettings[action.payload.index].sourceOptions.transformOptions
          .kwargs as KwargsMapping
      ).fieldName = action.payload.value.fieldName;
      break;

    // NOTE: using for fetch dataset form by id + also clear state
    case "SET_ENTIRE_DATASET_FORM":
      draft.general = action.payload.general;
      draft.changeAndImport = action.payload.changeAndImport;
      draft.fieldSettings = action.payload.fieldSettings;
      break;

    default:
      throw new Error(`Unhandled action type`);
  }
}
