import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";

export default async function postDatasets() {
  const url = `${BASE_API_URL}/v3/datasets`;
  const options: RequestInit = {
    method: "POST",
    headers: {
      authorization: `Bearer ${AUTH_TOKEN}`,
      body: JSON.stringify({}),
    },
  };

  console.log(options);

  try {
    // const response = await fetch(url, options);
    //
    // if (!response.ok) {
    //   throw new Error(
    //     `Failed to POST downloader data folder: ${response.statusText}`,
    //   );
    // }
    //
    // const data = await response.json();
    //
    // return data;
  } catch (error) {
    console.error("Error POST datasets:", error);
    throw error;
  }
}
