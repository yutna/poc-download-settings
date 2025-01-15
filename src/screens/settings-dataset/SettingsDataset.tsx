import { useImmerReducer } from "use-immer";
import FormDataSetChangeAndImport from "@/components/form-dataset-change-and-import";
import FormDataSetFieldSettings from "@/components/form-dataset-field-settings";
import FormDatasetGeneralSettings from "@/components/form-dataset-general-settings";

import {
  initialKwargs,
  initialKwargsMappingOption,
  initialState,
} from "./constants";
import reducer from "./reducer";
import useFetchDatasetTransformDropdown from "./useFetchDatasetTranformDropdown";
import useFetchDownloaderDropdown from "./useFetchDownloaderDropdown";
import useFetchDownloaderRefs from "./useFetchDownloaderRefs";
import useFetchMetadataDatasets from "./useFetchMetadataDatasets";
import useFetchMetadataDropdown from "./useFetchMetadataDropdown";

import type { FormEvent } from "react";
import type { Action } from "./types";
import { TransformOptionsMethods } from "@/components/form-dataset-field-settings/types";
import useFetchDatasetDestinationDropdown from "./useFetchDatasetDestinationDropdown";

export default function SettingsDataset() {
  // Hooks
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  // Variables
  const disabled = !state.editable;

  // Event handlers
  function handleEvent(type: string) {
    return function (payload: unknown) {
      dispatch({ type, payload } as Action);
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: implement validation and submit form.
    // TODO: wrap and convert raw data to match the api dtos
  }

  function handleMappingIsCustomFunctionChange() {
    return function ({ index, value }: { index: number; value: boolean }) {
      dispatch({
        type: "SET_KWARGS_MAPPING_IS_CUSTOM_FUNCTION",
        payload: {
          index,
          value,
        },
      } as Action);

      dispatch({
        type: "SET_KWARGS_MAPPING_OPTION",
        payload: {
          index,
          value: value === true ? [{ ...initialKwargsMappingOption }] : [],
        },
      } as Action);

      dispatch({
        type: "SET_KWARGS_MAPPING_INPUT_VALIDATION_FIELD",
        payload: {
          index,
          value: "",
        },
      });
    };
  }

  function handleTransformOptionMethodChange() {
    return function ({
      index,
      value,
    }: {
      index: number;
      value: TransformOptionsMethods;
    }) {
      // UPDATE TRANSFORM METHOD
      dispatch({
        type: "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_TRANSFORM_METHOD",
        payload: {
          index,
          value,
        },
      } as Action);

      // UPDATE SOURCE COLUMN INPUT
      dispatch({
        type: "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_SOURCE_COLUMN",
        payload: {
          index,
          value: null,
        },
      } as Action);

      // UPDATE TRANSFORM KWARGS
      dispatch({
        type: "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_TRANSFORM_KWARGS",
        payload: {
          index,
          value: initialKwargs[value],
        },
      } as Action);
    };
  }

  // Effect hooks
  useFetchDatasetDestinationDropdown({ dispatch });
  useFetchDatasetTransformDropdown({ dispatch });
  useFetchDownloaderDropdown({ dispatch });
  useFetchDownloaderRefs({ state, dispatch });
  useFetchMetadataDatasets({ state, dispatch });
  useFetchMetadataDropdown({ dispatch });

  return (
    <div className="container">
      <div className="preview">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <form onSubmit={handleSubmit}>
        <FormDatasetGeneralSettings
          data={state.general}
          disabled={disabled}
          onDatasetChange={handleEvent("SET_DATASET")}
          onDatasetDescriptionChange={handleEvent("SET_DATASET_DESCRIPTION")}
          onDatasetGeneralSettingStatusChange={handleEvent(
            "SET_GENERAL_SETTING_STATUS",
          )}
        />
        <FormDataSetChangeAndImport
          data={state.changeAndImport}
          temp={state.temp}
          disabled={disabled}
          onDatasetTransformIdChange={handleEvent("SET_DATASET_TRANSFORM_ID")}
          onHeaderRowChange={handleEvent("SET_HEADER_ROW")}
          onDownloaderIdChange={handleEvent("SET_DOWNLOADER_ID")}
          onMetadataIdChange={handleEvent("SET_METADATA_ID")}
          onDestinationChange={handleEvent("SET_DESTINATION")}
          onDestinationUniqueKeyChange={handleEvent(
            "SET_DESTINATION_UNIQUE_KEY",
          )}
          onDestinationPartitionColumnChange={handleEvent(
            "SET_DESTINATION_PARTITION_COLUMN",
          )}
          onDestinationNullOptionChange={handleEvent(
            "SET_DESTINATION_NULL_OPTION",
          )}
        />
        <FormDataSetFieldSettings
          data={state.fieldSettings}
          temp={state.temp}
          disabled={disabled}
          onDestinationColumnChange={handleEvent(
            "SET_DATASET_FIELD_SETTING_DESTINATION_COLUMN",
          )}
          onSourceOptionTransformMethodChange={handleTransformOptionMethodChange()}
          onDestinationOptionTypeChange={handleEvent(
            "SET_DATASET_FIELD_SETTING_DESTINATION_OPTION_TYPE",
          )}
          onSourceOptionSourceColumnChange={handleEvent(
            "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_SOURCE_COLUMN",
          )}
          onFieldSettingsStatusChange={handleEvent(
            "SET_DATASET_FIELD_SETTING_STATUS",
          )}
          onAppendNewFieldSetting={handleEvent(
            "APPEND_DATASET_NEW_FIELD_SETTING",
          )}
          // Kwargs Action
          onKwargsConstantValueChange={handleEvent("SET_KWARGS_CONSTANT_VALUE")}
          onKwargsCustomEvalChange={handleEvent("SET_KWARGS_CUSTOM_EVAL")}
          onKwargsDateTimeFormatChange={handleEvent(
            "SET_KWARGS_DATE_TIME_FORMAT",
          )}
          onKwargsMappingFieldNameChange={handleEvent(
            "SET_KWARGS_MAPPING_FIELD_NAME",
          )}
          onKwargsMappingDestinationMapChange={handleEvent(
            "SET_KWARGS_MAPPING_DESTINATION_MAP",
          )}
          onKwargsMappingInputValidationFieldChange={handleEvent(
            "SET_KWARGS_MAPPING_INPUT_VALIDATION_FIELD",
          )}
          onKwargsMappingIsCustomFunctionChange={handleMappingIsCustomFunctionChange()}
          onKwargsMappingOptionFieldChange={handleEvent(
            "SET_KWARGS_MAPPING_OPTION_FIELD",
          )}
          onKwargsMappingOptionDefaultChange={handleEvent(
            "SET_KWARGS_MAPPING_OPTION_DEFAULT",
          )}
          onAppendNewKwargsMappingOption={handleEvent(
            "APPEND_KWARGS_MAPPING_OPTION",
          )}
          onDeleteKwargsMappingOption={handleEvent(
            "DELETE_KWARGS_MAPPING_OPTION",
          )}
        />
        <div className="action">
          <button type="submit">บันทึก</button>
        </div>
      </form>
    </div>
  );
}
