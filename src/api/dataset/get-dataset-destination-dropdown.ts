import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";

export default async function getDatasetDestinationDropdown() {
  const url = `${BASE_API_URL}/v3/datasets/destination_dropdown`;
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
        `Failed to fetch datasets destination dropdown: ${response.statusText}`,
      );
    }

    const { destinations } = await response.json();

    return destinations;
  } catch (error) {
    console.error("Error fetching datasets destination dropdown:", error);
    throw error;
  }
}
