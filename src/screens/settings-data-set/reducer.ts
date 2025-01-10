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
    case "SET_FIELD":
      draft.changeAndImport.field1 = action.payload;
      break;
    case "SET_SOME_SELECT":
      draft.changeAndImport.someSelect = action.payload;
      break;

    // Data Set Field Settings Form
    case "SET_SOME_FIELD":
      draft.fieldSettings[action.payload.index].someField =
        action.payload.value;
      break;
    case "SET_DATASET_FIELD_SETTING_STATUS":
      draft.fieldSettings[action.payload.index].status = action.payload.value;
      break;
    case "APPEND_DATASET_NEW_FIELD_SETTING":
      draft.fieldSettings = [...draft.fieldSettings, action.payload];
      break;

    default:
      throw new Error(`Unhandled action type`);
  }
}
