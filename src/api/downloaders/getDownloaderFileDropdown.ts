import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";
import type { DownloaderFileDropdown } from "./types";

export default async function getDownloaderFileDropdown(): Promise<
  DownloaderFileDropdown[]
> {
  const url = `${BASE_API_URL}/v3/downloader_files/dropdown`;
  const options: RequestInit = {
    method: "GET",
    headers: {
      authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch downloader file dropdown: ${response.statusText}`
      );
    }

    const files = (await response.json()) as DownloaderFileDropdown[];

    return files;
  } catch (error) {
    console.error("Error fetching downloader file dropdown:", error);
    throw error;
  }
}
