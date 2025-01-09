import type { ChangeEvent } from "react";
import type { Option } from "@/types/form";

export type DataEntryFormat = "SELECT_FROM_SETTINGS" | "SELF_FILL_DATA_ENTRY";
export type DownloaderDriverType =
  | "STANDARD"
  | "NON_STANDARD"
  | "POST_PROCESSING";

export interface ParameterRow {
  key: string;
  value: string;
}

export interface FormProcessSettingsData {
  commandSet: string;
  dataEntryFormat: DataEntryFormat;
  downloaderDriverConfigId: number | undefined;
  downloaderDriverConfigOptions: Option[];
  downloaderDriverType: DownloaderDriverType;
  driverId: number | undefined;
  driverOptions: Option[];
  hasParameter: boolean;
  host: string;
  parameter: Record<string, string>;
  password: string;
  timeoutSeconds: number;
  username: string;
}

export interface FormNonStandardDriverProps {
  data: FormProcessSettingsData;
  disabled: boolean;
  onDeleteParameter: (index: number) => void;
  onHasParameterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onHostChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onParameterChange: (
    index: number,
    field: "key" | "value",
    value: string
  ) => void;
  onTimeoutSecondsChange: (e: ChangeEvent<HTMLInputElement>) => void;
  parameterRows: ParameterRow[];
}

export interface FormPostProcessingDriverProps {
  data: FormProcessSettingsData;
  disabled: boolean;
  onCommandSetChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onHostChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface FormProcessSettingsProps {
  data: FormProcessSettingsData;
  disabled: boolean;
  onCommandSetChange: (value: string) => void;
  onDataEntryFormatChange: (value: DataEntryFormat) => void;
  onDeleteParameter: (index: number) => void;
  onDownloaderDriverConfigChange: (value: number) => void;
  onDownloaderDriverTypeChange: (value: DownloaderDriverType) => void;
  onDriverChange: (value: number) => void;
  onHasParameterChange: (checked: boolean) => void;
  onHostChange: (value: string) => void;
  onParameterChange: (
    index: number,
    field: "key" | "value",
    value: string
  ) => void;
  onPasswordChange: (value: string) => void;
  onTimeoutSecondsChange: (value: number) => void;
  onUsernameChange: (value: string) => void;
  parameterRows: ParameterRow[];
}

export interface FormStandardDriverProps {
  data: FormProcessSettingsData;
  disabled: boolean;
  isSelectFromSettings: boolean;
  onDataEntryFormatChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onDownloaderDriverConfigChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onHostChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTimeoutSecondsChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
