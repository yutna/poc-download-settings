export interface FormDataSetChangeAndImportData {
  field1: string;
  someSelect: string;
}

export interface FormDataSetChangeAndImportProps {
  data: FormDataSetChangeAndImportData;
  onFieldChange: (payload: string) => void;
  onSomeSelectChange: (payload: string) => void;
}
