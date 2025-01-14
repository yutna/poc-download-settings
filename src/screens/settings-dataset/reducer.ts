import type { Action, State } from "./types";

export default function reducer(draft: State, action: Action) {
  switch (action.type) {
    // Data Set General Settings Form
    case "SET_DATASET":
      draft.general.dataset = action.payload;
      break;
    case "SET_DATASET_DESCRIPTION":
      draft.general.datasetDescription = action.payload;
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
      draft.fieldSettings[action.payload.index].sourceOptions.transform.method =
        action.payload.value;
      break;
    case "SET_DATASET_FIELD_SETTING_DESTINATION_OPTION_TYPE":
      draft.fieldSettings[action.payload.index].destinationOptions.type =
        action.payload.value;
      break;
    case "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_SOURCE_COLUMN":
      draft.fieldSettings[action.payload.index].sourceOptions.sourceColumn =
        action.payload.value;
      break;
    case "SET_DATASET_FIELD_SETTING_STATUS":
      draft.fieldSettings[action.payload.index].destinationOptions.status =
        action.payload.value;
      break;
    case "APPEND_DATASET_NEW_FIELD_SETTING":
      draft.fieldSettings = [...draft.fieldSettings, action.payload];
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
