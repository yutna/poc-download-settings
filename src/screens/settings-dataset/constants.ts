import type { FormDatasetFieldSettingsData } from "@/components/form-dataset-field-settings";
import { SourceOptionMethods } from "@/components/form-dataset-field-settings/types";

export const initialState = {
  editable: true,

  // TODO: use this for conditional editable field named "ชื่อตารางข้อมูลที่จะนำเข้า"
  datasetId: undefined,

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
        sourceColumnInput: "",
        transformOptions: {
          method: SourceOptionMethods.DEFAULT,
          kwargs: {},
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
    sourceColumnInput: "",
    transformOptions: {
      method: SourceOptionMethods.DEFAULT,
      kwargs: {},
    },
  },
};
