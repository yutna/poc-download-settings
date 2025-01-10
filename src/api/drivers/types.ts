export type DriverDropdownTemplate =
  | "NON_STANDARD_FTP_SFTP"
  | "NON_STANDARD_GENERAL"
  | "POST_PROCESSING"
  | "STANDARD";

export interface DriverDropdownContext {
  driverTemplate: DriverDropdownTemplate;
}

export interface DriverDropdown {
  id: number;
  label: string;
  context: DriverDropdownContext;
}
