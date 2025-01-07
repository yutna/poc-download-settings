import { useImmerReducer } from "use-immer";

import FormDataStorageFolder from "@/components/form-data-storage-folder";
import FormDownloadSettings from "@/components/form-download-settings";
import FormGeneralSettings from "@/components/form-general-settings";

import { initialState } from "./constants";
import reducer from "./reducer";
import useDisplayTimePreview from "./useDisplayTimePreview";
import useFetchAgencyOptions from "./useFetchAgencyOptions";
import useFetchDownloaderFileOptions from "./useFetchDownloaderFileOptions";
import useFetchStorage from "./useFetchStorage";

import type { FormEvent } from "react";
import type { Action } from "./types";

export default function SettingsDownloader() {
  // Hooks
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  // Variables
  const disabled = !state.general.status;

  // Event handlers
  function handleEvent(type: string) {
    return function (payload: unknown) {
      dispatch({ type, payload } as Action);
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: implement validation and submit form.
  }

  // Effect hooks
  useFetchAgencyOptions({ dispatch });
  useFetchDownloaderFileOptions({ dispatch });
  useFetchStorage({ state, dispatch });
  useDisplayTimePreview({ state, dispatch });

  return (
    <div className="container">
      <div className="preview">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <form onSubmit={handleSubmit}>
        <FormGeneralSettings
          data={state.general}
          disabled={disabled}
          onAgencyChange={handleEvent("SET_AGENCY_ID")}
          onDownloaderChange={handleEvent("SET_DOWNLOADER")}
          onDownloaderDescriptionChange={handleEvent(
            "SET_DOWNLOADER_DESCRIPTION"
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
        <div className="action">
          <button type="submit">บันทึก</button>
        </div>
      </form>
    </div>
  );
}
