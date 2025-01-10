import { useImmerReducer } from "use-immer";

import FormDataSetChangeAndImport from "@/components/form-dataset-change-and-import";
import FormDataSetFieldSettings from "@/components/form-dataset-field-settings";
import FormDatasetGeneralSettings from "@/components/form-dataset-general-settings";

import { initialState } from "./constants";
import reducer from "./reducer";
import useFetchMetadataDropdown from "./useFetchMetadataDropdown";
import useFetchDatasetTransformDropdown from "./useFetchDatasetTranformDropdown";

import type { FormEvent } from "react";
import type { Action } from "./types";

export default function SettingsDataset() {
  // Hooks
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  // Event handlers
  function handleEvent(type: string) {
    return function(payload: unknown) {
      dispatch({ type, payload } as Action);
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: implement validation and submit form.
  }

  // Effect hooks
  useFetchMetadataDropdown({ dispatch });
  useFetchDatasetTransformDropdown({ dispatch });

  return (
    <div className="container">
      <div className="preview">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <form onSubmit={handleSubmit}>
        <FormDatasetGeneralSettings
          data={state.general}
          onDatasetChange={handleEvent("SET_DATASET")}
          onDatasetDescriptionChange={handleEvent("SET_DATASET_DESCRIPTION")}
        />
        <FormDataSetChangeAndImport
          data={state.changeAndImport}
          onFieldChange={handleEvent("SET_FIELD")}
          onSomeSelectChange={handleEvent("SET_SOME_SELECT")}
        />
        <FormDataSetFieldSettings
          data={state.fieldSettings}
          onSomeFieldChange={handleEvent("SET_SOME_FIELD")}
          onFieldSettingsStatusChange={handleEvent(
            "SET_DATASET_FIELD_SETTING_STATUS",
          )}
          onAppendNewFieldSetting={handleEvent(
            "APPEND_DATASET_NEW_FIELD_SETTING",
          )}
        />
      </form>
    </div>
  );
}
