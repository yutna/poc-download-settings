import type { Action, State } from "./types";

export default function reducer(draft: State, action: Action) {
  switch (action.type) {
    case "SET_AGENCY_ID":
      draft.general.agencyId = action.payload;
      break;
    case "SET_AGENCY_OPTIONS":
      draft.general.agencyOptions = action.payload;
      break;
    case "SET_DOWNLOADER":
      draft.general.downloader = action.payload;
      break;
    case "SET_DOWNLOADER_DESCRIPTION":
      draft.general.downloaderDescription = action.payload;
      break;
    case "SET_DOWNLOADER_TYPE":
      draft.general.downloaderType = action.payload;
      break;
    case "SET_STATUS":
      draft.general.status = action.payload;
      break;
    default:
      throw new Error(`Unhandled action type`);
  }
}
