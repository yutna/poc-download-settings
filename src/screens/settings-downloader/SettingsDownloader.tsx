import { useEffect } from "react";
import { useImmerReducer } from "use-immer";

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
  }, [dispatch]);

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
        <div className="action">
          <button type="submit">บันทึก</button>
        </div>
      </form>
    </div>
  );
}
