import type { FormDatasetFieldSettingsData } from "@/components/form-dataset-field-settings";

export const initialState = {
  general: {
    dataset: "",
    datasetDescription: "",
  },
  changeAndImport: {
    datasetTransformId: undefined,
    datasetTransformDropdown: [],
    headerRow: undefined,

    downloaderId: undefined,
    downloaderDropdown: [],

    metadataId: undefined,
    metadataDropdown: [],

    // relevantInformation: "",
    // pathForFileAndInput: "",

    destination: "",
    destinationUniqueKey: "",
    destinationPartitionColumn: "",
    destinationNullOption: "",
  },
  fieldSettings: [
    {
      destinationColumn: "",
      destinationOptions: {
        type: "",
        status: true,
      },
      sourceOptions: {
        sourceColumn: "",
        transform: {
          method: "",
        },
      },
    },
  ],
};

export const initialFieldSettingsData: FormDatasetFieldSettingsData = {
  destinationColumn: "",
  destinationOptions: {
    type: "",
    status: true,
  },
  sourceOptions: {
    sourceColumn: "",
    transform: {
      method: "",
    },
  },
};
