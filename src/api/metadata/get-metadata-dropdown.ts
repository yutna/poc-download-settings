import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";

export default async function getMetadataDropdown() {
  const url = `${BASE_API_URL}/v2/metadatas/dropdown`;
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
        `Failed to fetch metadata dropdown: ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching metadata dropdown:", error);
    throw error;
  }
}
