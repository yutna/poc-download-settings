import { useImmerReducer } from "use-immer";

import FormDataSetChangeAndImport from "@/components/form-dataset-change-and-import";
import FormDataSetFieldSettings from "@/components/form-dataset-field-settings";
import FormDatasetGeneralSettings from "@/components/form-dataset-general-settings";

import { initialState } from "./constants";
import reducer from "./reducer";
import useFetchDatasetTransformDropdown from "./useFetchDatasetTranformDropdown";
import useFetchDownloaderDropdown from "./useFetchDownloaderDropdown";
import useFetchDownloaderRefs from "./useFetchDownloaderRefs";
import useFetchMetadataDatasets from "./useFetchMetadataDatasets";
import useFetchMetadataDropdown from "./useFetchMetadataDropdown";

import type { FormEvent } from "react";
import type { Action } from "./types";

export default function SettingsDataset() {
  // Hooks
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const disabled = !state.editable;

  // Event handlers
  function handleEvent(type: string) {
    return function(payload: unknown) {
      dispatch({ type, payload } as Action);
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: implement validation and submit form.
    // TODO: wrap and convert raw data to match the api dtos
  }

  // Effect hooks
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
        />
        <FormDataSetChangeAndImport
          data={state.changeAndImport}
          disabled={disabled}
          onDatasetTransformIdChange={handleEvent("SET_DATASET_TRANSFORM_ID")}
          onHeaderRowChange={handleEvent("SET_HEADER_ROW")}
          onDownloaderIdChange={handleEvent("SET_DOWNLOADER_ID")}
          onMetadataIdChange={handleEvent("SET_METADATA_ID")}
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
          disabled={disabled}
          onDestinationColumnChange={handleEvent(
            "SET_DATASET_FIELD_SETTING_DESTINATION_COLUMN",
          )}
          onSourceOptionTransformMethodChange={handleEvent(
            "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_TRANSFORM_METHOD",
          )}
          onDestinationOptionType={handleEvent(
            "SET_DATASET_FIELD_SETTING_DESTINATION_OPTION_TYPE",
          )}
          onSourceOptionSourceColumn={handleEvent(
            "SET_DATASET_FIELD_SETTING_SOURCE_OPTION_SOURCE_COLUMN",
          )}
          onFieldSettingsStatusChange={handleEvent(
            "SET_DATASET_FIELD_SETTING_STATUS",
          )}
          onAppendNewFieldSetting={handleEvent(
            "APPEND_DATASET_NEW_FIELD_SETTING",
          )}
        />
        <div className="action">
          <button type="submit">บันทึก</button>
        </div>
      </form>
    </div>
  );
}
