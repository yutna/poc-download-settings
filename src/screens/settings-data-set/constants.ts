import type { FormDataSetFieldSettingsData } from "@/components/form-data-set-field-settings";

export const initialState = {
  general: {
    dataset: "",
    datasetDescription: "",
  },
  changeAndImport: {
    field1: "",
    someSelect: "",
  },
  fieldSettings: [
    {
      someField: "",
      status: true,
    },
  ],
};

export const initialFieldSettingsData: FormDataSetFieldSettingsData = {
  someField: "",
  status: true,
};
