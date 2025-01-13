import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";
import type { DownloaderDriverConfigDropdown } from "./types";

export default async function getDownloaderDriverConfigDropdown(
  driverId: number
) {
  const searchParams = new URLSearchParams({
    driverId: String(driverId),
  }).toString();

  const url = `${BASE_API_URL}/v3/downloader_driver_configs/dropdown?${searchParams}`;
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
        `Failed to fetch downloader driver config dropdown: ${response.statusText}`
      );
    }

    const data = (await response.json()) as DownloaderDriverConfigDropdown[];

    return data;
  } catch (error) {
    console.error("Error fetching downloader driver config dropdown:", error);
    throw error;
  }
}
