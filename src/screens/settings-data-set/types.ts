import { FormDataSetFieldSettingsData } from "@/components/form-data-set-field-settings";
import { FormDataSetGeneralSettingsData } from "@/components/form-data-set-general-settings";

import type { FormDataSetChangeAndImportData } from "@/components/form-data-set-change-and-import/types";
import type {
  DataSetFieldSettingsSomeField,
  DataSetFieldSettingsSomeSelect,
  DataSetFieldSettingsStatus,
} from "@/components/form-data-set-field-settings/types";

export type Action =
  | { type: "SET_DATASET"; payload: string }
  | { type: "SET_DATASET_DESCRIPTION"; payload: string }
  | { type: "SET_FIELD"; payload: string }
  | { type: "SET_SOME_SELECT"; payload: DataSetFieldSettingsSomeSelect }
  | { type: "SET_SOME_FIELD"; payload: DataSetFieldSettingsSomeField }
  | {
    type: "SET_DATASET_FIELD_SETTING_STATUS";
    payload: DataSetFieldSettingsStatus;
  }
  | {
    type: "APPEND_DATASET_NEW_FIELD_SETTING";
    payload: FormDataSetFieldSettingsData;
  };

export interface State {
  general: FormDataSetGeneralSettingsData;
  changeAndImport: FormDataSetChangeAndImportData;
  fieldSettings: Array<FormDataSetFieldSettingsData>;
}
