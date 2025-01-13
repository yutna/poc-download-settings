import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";

export default async function getDownloaderDropdown() {
  const url = `${BASE_API_URL}/v3/downloaders/dropdown`;
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
        `Failed to fetch downloader dropdown: ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching downloader dropdown:", error);
    throw error;
  }
}
