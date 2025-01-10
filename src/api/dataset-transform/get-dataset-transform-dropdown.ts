import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";

export default async function getDatasetTransformDropdown() {
  const url = `${BASE_API_URL}/v3/dataset_transforms/dropdown`;
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
        `Failed to fetch dataset transforms dropdown: ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching dataset transforms dropdown:", error);
    throw error;
  }
}
