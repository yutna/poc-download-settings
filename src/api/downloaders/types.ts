export interface DownloaderDriverConfigDropdown {
  id: number;
  label: "string";
  context: {
    fields: {
      username: string;
      password: string;
    };
  };
}

// TODO:
// Yut ต้องส่ง driver id มาใน dropdown config API
// Robert แก้ field เป็น username password ไปก่อน ตาม UI

export interface DownloaderFileDropdown {
  id: number;
  label: string;
}
