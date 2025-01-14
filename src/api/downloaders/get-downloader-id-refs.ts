import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";

export default async function getDownloaderIdRefs(downloaderId: number) {
  const url = `${BASE_API_URL}/v3/downloaders/${downloaderId}/refs`;
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
        `Failed to fetch downloader id refs: ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching downloader id refs:", error);
    throw error;
  }
}
