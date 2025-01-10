import type { FormDatasetFieldSettingsData } from "@/components/form-dataset-field-settings";

export const initialState = {
  general: {
    dataset: "",
    datasetDescription: "",
  },
  changeAndImport: {
    field1: "",
    someSelect: "",
    metadataDropdown: [],
  },
  fieldSettings: [
    {
      someField: "",
      status: true,
    },
  ],
};

export const initialFieldSettingsData: FormDatasetFieldSettingsData = {
  someField: "",
  status: true,
};
