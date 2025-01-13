export type AdditionalFieldsTuple = Record<string, string>;

export interface Fields {
  username: string;
  password: string;
}

export interface Context {
  fields: Fields;
  additionalFieldsTuple: AdditionalFieldsTuple[];
}

export interface DownloaderDriverConfigDropdown {
  id: number;
  label: "string";
  context: Context;
}

export interface DownloaderFileDropdown {
  id: number;
  label: string;
}
