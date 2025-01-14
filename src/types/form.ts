export interface Option {
  label: string;
  value: string;
}

export interface DatasetDropdownOption {
  id: number;
  label: string;
}

export interface MetadataDropdownOption {
  id: number;
  label: Record<string, string>;
}
