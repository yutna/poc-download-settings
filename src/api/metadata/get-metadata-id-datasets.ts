import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";

export default async function getMetadataIdDatasets(metadataId: number) {
  const url = `${BASE_API_URL}/v3/metadatas/${metadataId}/datasets`;
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
        `Failed to fetch metadata id datasets: ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching metadata id datasets:", error);
    throw error;
  }
}
