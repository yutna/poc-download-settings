import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";
import type { SettingsDownloaderSchema } from "@/schemas/settingsDownloaderSchema";

export default async function postDownloaders(data: SettingsDownloaderSchema) {
  const url = `${BASE_API_URL}/v3/downloaders`;
  const options: RequestInit = {
    method: "POST",
    headers: {
      authorization: `Bearer ${AUTH_TOKEN}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to POST downloaders: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error POST downloaders:", error);
    throw error;
  }
}
