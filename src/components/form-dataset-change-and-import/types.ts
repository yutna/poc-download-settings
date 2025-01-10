import type { Option } from "@/types/form";

export interface FormDatasetChangeAndImportData {
  field1: string;
  someSelect: string;
  metadataDropdown: Array<Option>;
}

export interface FormDatasetChangeAndImportProps {
  data: FormDatasetChangeAndImportData;
  onFieldChange: (payload: string) => void;
  onSomeSelectChange: (payload: string) => void;
}
