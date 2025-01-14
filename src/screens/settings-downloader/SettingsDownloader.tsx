import { useEffect, useState } from "react";
import { useImmer, useImmerReducer } from "use-immer";

import FormDataStorageFolder from "@/components/form-data-storage-folder";
import FormDownloadSettings from "@/components/form-download-settings";
import FormGeneralSettings from "@/components/form-general-settings";
import FormProcessSettings from "@/components/form-process-settings";

import { initialState } from "./constants";
import { convertRowsToObject, getParameterRows } from "./helpers";
import reducer from "./reducer";
import useDisplayTimePreview from "./useDisplayTimePreview";
import useFetchAgencyOptions from "./useFetchAgencyOptions";
import useFetchDownloaderDriverConfigOptions from "./useFetchDownloaderDriverConfigOptions";
import useFetchDownloaderFileOptions from "./useFetchDownloaderFileOptions";
import useFetchDriverOptions from "./useFetchDriverOptions";
import useFetchStorage from "./useFetchStorage";
import useUpdateDriverTemplate from "./useUpdateDriverTemplate";
import useUpdateFields from "./useUpdateFields";

import type { FormEvent } from "react";
import type { Action } from "./types";

export default function SettingsDownloader() {
  // Hooks
  const [showPreview] = useState(true);
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const [parameterRows, setParameterRows] = useImmer(
    getParameterRows(state.downloaderDriver.parameter),
  );

  // Variables
  const disabled = !state.general.status;

  // Event handlers
  function handleDeleteParameter(index: number) {
    setParameterRows((draft) => {
      if (index >= 0 && index < draft.length) {
        draft.splice(index, 1);
      }
    });
  }

  function handleEvent(type: Action["type"]) {
    return function (payload: unknown) {
      dispatch({ type, payload } as Action);
    };
  }

  function handleParameterChange(
    index: number,
    field: "key" | "value",
    value: string,
  ) {
    setParameterRows((draft) => {
      draft[index][field] = value;

      const isLastRow = index === draft.length - 1;
      const isNotEmpty =
        draft[index].key.trim() !== "" || draft[index].value.trim() !== "";

      if (isLastRow && isNotEmpty) {
        draft.push({ key: "", value: "" });
      }
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: implement validation and submit form.
    // TODO: convert parameter row to parameter obj.
  }

  // Effect hooks
  useFetchAgencyOptions({ dispatch });
  useFetchDownloaderFileOptions({ dispatch });
  useFetchStorage({ state, dispatch });
  useDisplayTimePreview({ state, dispatch });
  useFetchDriverOptions({ state, dispatch });
  useFetchDownloaderDriverConfigOptions({ state, dispatch });
  useUpdateDriverTemplate({ state, dispatch });
  useUpdateFields({ state, dispatch });

  // TODO: just debug value, remove this when finished implementation.
  useEffect(() => {
    const payload = convertRowsToObject(parameterRows);
    dispatch({ type: "SET_PARAMETER", payload });
  }, [dispatch, parameterRows]);

  return (
    <div className="container">
      <div
        className="preview"
        style={{ display: showPreview ? "block" : "none" }}
      >
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <form onSubmit={handleSubmit}>
        <FormGeneralSettings
          data={state.general}
          disabled={disabled}
          onAgencyChange={handleEvent("SET_AGENCY_ID")}
          onDownloaderChange={handleEvent("SET_DOWNLOADER")}
          onDownloaderDescriptionChange={handleEvent(
            "SET_DOWNLOADER_DESCRIPTION",
          )}
          onDownloaderTypeChange={handleEvent("SET_DOWNLOADER_TYPE")}
          onStatusChange={handleEvent("SET_STATUS")}
        />
        <FormDataStorageFolder
          data={{
            agencyId: state.general.agencyId,
            agencyOptions: state.general.agencyOptions,
            ...state.dataStorageFolder,
          }}
          disabled={disabled}
          onDataSubTypeChange={handleEvent("SET_DATA_SUB_TYPE")}
          onDataTypeChange={handleEvent("SET_DATA_TYPE")}
          onDownloaderFileChange={handleEvent("SET_DOWNLOADER_FILE_IDS")}
        />
        <FormDownloadSettings
          data={state.download}
          disabled={disabled}
          onRetryCountChange={handleEvent("SET_RETRY_COUNT")}
          onScheduleIntervalChange={handleEvent("SET_SCHEDULE_INTERVAL")}
        />
        <FormProcessSettings
          data={state.downloaderDriver}
          disabled={disabled}
          onCommandSetChange={handleEvent("SET_COMMAND_SET")}
          onDataEntryFormatChange={handleEvent("SET_DATA_ENTRY_FORMAT")}
          onDeleteParameter={handleDeleteParameter}
          onDeleteOldFileChange={handleEvent("SET_DELETE_OLD_FILE")}
          onDownloaderDriverConfigChange={handleEvent(
            "SET_DOWNLOADER_DRIVER_CONFIG_ID",
          )}
          onDownloaderDriverTypeChange={handleEvent(
            "SET_DOWNLOADER_DRIVER_TYPE",
          )}
          onDriverChange={handleEvent("SET_DRIVER_ID")}
          onHasParameterChange={handleEvent("SET_HAS_PARAMETER")}
          onHostChange={handleEvent("SET_HOST")}
          onParameterChange={handleParameterChange}
          onPasswordChange={handleEvent("SET_PASSWORD")}
          onTimeoutSecondsChange={handleEvent("SET_TIMEOUT_SECONDS")}
          onUsernameChange={handleEvent("SET_USERNAME")}
          parameterRows={parameterRows}
        />
        <div className="action">
          <button type="submit">บันทึก</button>
        </div>
      </form>
    </div>
  );
}
