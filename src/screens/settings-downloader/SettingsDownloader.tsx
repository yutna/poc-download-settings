import { useEffect } from "react";
import { useImmerReducer } from "use-immer";

import FormDataStorageFolder from "@/components/form-data-storage-folder";
import FormGeneralSettings from "@/components/form-general-settings";

import { initialState } from "./constants";
import reducer from "./reducer";

import type { FormEvent } from "react";
import type { DownloaderType } from "@/components/form-general-settings";

export default function SettingsDownloader() {
  // Hooks
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  // Variables
  const disabled = !state.general.status;

  // Event handlers
  // Form
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: implement validation and submit form.
  }

  // General Setttings Form
  function handleAgencyChange(agencyId: number) {
    dispatch({ type: "SET_AGENCY_ID", payload: agencyId });
  }

  function handleDownloaderChange(value: string) {
    dispatch({ type: "SET_DOWNLOADER", payload: value });
  }

  function handleDownloaderDescriptionChange(value: string) {
    dispatch({ type: "SET_DOWNLOADER_DESCRIPTION", payload: value });
  }

  function handleDownloaderTypeChange(value: DownloaderType) {
    dispatch({ type: "SET_DOWNLOADER_TYPE", payload: value });
  }

  function handleStatusChange(status: boolean) {
    dispatch({ type: "SET_STATUS", payload: status });
  }

  // Form Data Storage Folder
  function handleDataSubTypeChange(value: string) {
    dispatch({ type: "SET_DATA_SUB_TYPE", payload: value });
  }

  function handleDataTypeChange(value: string) {
    dispatch({ type: "SET_DATA_TYPE", payload: value });
  }

  function handleDownloaderFileChange(values: number[]) {
    dispatch({ type: "SET_DOWNLOADER_FILE_IDS", payload: values });
  }

  // Effect hooks
  useEffect(() => {
    // TODO: fetch agency options
    dispatch({
      type: "SET_AGENCY_OPTIONS",
      payload: [
        { label: "กรมทรัพยากรน้ำ", value: "1" },
        { label: "กรมเกลียว", value: "2" },
      ],
    });

    // TODO: fetch downloader file options
    dispatch({
      type: "SET_DOWNLOADER_FILE_OPTIONS",
      payload: [
        { label: ".png", value: "1" },
        { label: ".jpg", value: "2" },
      ],
    });
  }, [dispatch]);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    if (
      state.general.agencyId &&
      state.dataStorageFolder.downloaderFileIds.length &&
      state.dataStorageFolder.dataSubType.trim().length &&
      state.dataStorageFolder.dataType.trim().length
    ) {
      // TODO: fetch storage preview
      timeout = setTimeout(() => {
        console.log("Fetch storage path");
      }, 500);
    } else {
      dispatch({ type: "SET_STORAGE_PREVIEW", payload: "" });
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [
    dispatch,
    state.general.agencyId,
    state.dataStorageFolder.downloaderFileIds.length,
    state.dataStorageFolder.dataSubType,
    state.dataStorageFolder.dataType,
  ]);

  return (
    <div className="container">
      <div className="preview">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <form onSubmit={handleSubmit}>
        <FormGeneralSettings
          data={state.general}
          disabled={disabled}
          onAgencyChange={handleAgencyChange}
          onDownloaderChange={handleDownloaderChange}
          onDownloaderDescriptionChange={handleDownloaderDescriptionChange}
          onDownloaderTypeChange={handleDownloaderTypeChange}
          onStatusChange={handleStatusChange}
        />
        <FormDataStorageFolder
          data={{
            agencyId: state.general.agencyId,
            agencyOptions: state.general.agencyOptions,
            ...state.dataStorageFolder,
          }}
          disabled={disabled}
          onDataSubTypeChange={handleDataSubTypeChange}
          onDataTypeChange={handleDataTypeChange}
          onDownloaderFileChange={handleDownloaderFileChange}
        />
        <div className="action">
          <button type="submit">บันทึก</button>
        </div>
      </form>
    </div>
  );
}
