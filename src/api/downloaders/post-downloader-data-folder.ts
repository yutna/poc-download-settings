import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";

export default async function postDownloaderDataFolder({
  agencyId,
  dataSubType,
  dataType,
  fileIds,
}: {
  agencyId: number;
  dataSubType: string;
  dataType: string;
  fileIds: number[];
}): Promise<string> {
  const url = `${BASE_API_URL}/v3/downloaders/data_folder`;
  const options: RequestInit = {
    method: "POST",
    headers: {
      authorization: `Bearer ${AUTH_TOKEN}`,
      body: JSON.stringify({ agencyId, dataSubType, dataType, fileIds }),
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Failed to POST downloader data folder: ${response.statusText}`
      );
    }

    const data = (await response.json()) as {
      success: boolean;
      dataFolders: string[];
    };

    return data.dataFolders.length ? data.dataFolders[0] : "";
  } catch (error) {
    console.error("Error POST downloader data folder:", error);
    throw error;
  }
}
