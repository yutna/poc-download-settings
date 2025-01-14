import type { FormDatasetFieldSettingsData } from "@/components/form-dataset-field-settings";

export const initialState = {
  editable: true,
  general: {
    dataset: "",
    datasetDescription: "",
    status: true,
  },
  changeAndImport: {
    datasetTransformId: undefined,
    datasetTransformDropdown: [],
    headerRow: undefined,

    downloaderId: undefined,
    downloaderDropdown: [],
    processFiles: [],
    processFolders: [],
    datasetDisplay: "",

    metadataId: undefined,
    metadataDropdown: [],

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
