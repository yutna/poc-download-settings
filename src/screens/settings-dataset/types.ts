import { FormDatasetFieldSettingsData } from "@/components/form-dataset-field-settings";
import { FormDatasetGeneralSettingsData } from "@/components/form-dataset-general-settings";

import type { FormDatasetChangeAndImportData } from "@/components/form-dataset-change-and-import/types";
import type {
  DatasetFieldSettingsSomeField,
  DatasetFieldSettingsStatus,
} from "@/components/form-dataset-field-settings/types";

export type Action =
  | { type: "SET_DATASET"; payload: string }
  | { type: "SET_DATASET_DESCRIPTION"; payload: string }
  | { type: "SET_FIELD"; payload: string }
  | { type: "SET_SOME_SELECT"; payload: string }
  | { type: "SET_METADATA_DROPDOWN"; payload: unknown[] }
  | { type: "SET_SOME_FIELD"; payload: DatasetFieldSettingsSomeField }
  | {
    type: "SET_DATASET_FIELD_SETTING_STATUS";
    payload: DatasetFieldSettingsStatus;
  }
  | {
    type: "APPEND_DATASET_NEW_FIELD_SETTING";
    payload: FormDatasetFieldSettingsData;
  };

export interface State {
  general: FormDatasetGeneralSettingsData;
  changeAndImport: FormDatasetChangeAndImportData;
  fieldSettings: Array<FormDatasetFieldSettingsData>;
}
