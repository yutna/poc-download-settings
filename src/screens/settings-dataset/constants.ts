import type { FormDatasetFieldSettingsData } from "@/components/form-dataset-field-settings";
import { TransformOptionsMethods } from "@/components/form-dataset-field-settings/types";

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
          method: TransformOptionsMethods.DEFAULT,
          kwargs: {},
        },
      },
    },
  ],
  temp: {
    destinationDropdown: [],
  },
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
      method: TransformOptionsMethods.DEFAULT,
      kwargs: {},
    },
  },
};

export const transformOptionsMethods = [
  "default",
  "constant",
  "custom",
  "datetime",
  "mapping",
  "mappingnil",
];

export const initialSourceOptions = {
  sourceColumnInput: "",
  transfromOptions: {
    method: TransformOptionsMethods.DEFAULT,
    kwargs: {},
  },
};

export const initialKwargsConstant = {
  value: 0,
};

export const initialKwargsCustom = {
  eval: "",
};

export const initialKwargsDateTime = {
  isCustom: false,
  format: "%Y-%m-%d %H:%M:%S",
};

export const initialKwargsMapping = {
  fieldName: "",
  destinationMap: "",
  isCustomFunction: false,
  inputFieldValidation: "",
  options: [],
};

export const initialKwargsMappingNil = {
  fieldName: "",
  destinationMap: "",
  inputFieldValidation: "",
};

export const initialKwargsMappingOption = {
  field: "",
  default: "",
};

export const initialKwargs = {
  [TransformOptionsMethods.DEFAULT]: {},
  [TransformOptionsMethods.CONSTANT]: initialKwargsConstant,
  [TransformOptionsMethods.CUSTOM]: initialKwargsCustom,
  [TransformOptionsMethods.DATE_TIME]: initialKwargsDateTime,
  [TransformOptionsMethods.MAPPING]: initialKwargsMapping,
  [TransformOptionsMethods.MAPPING_NIL]: initialKwargsMappingNil,
};
