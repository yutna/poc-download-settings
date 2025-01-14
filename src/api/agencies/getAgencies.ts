import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";
import type { Agency } from "./types";

export default async function getAgencies(): Promise<Agency[]> {
  const url = `${BASE_API_URL}/v3/big_data/agencies/dropdown`;
  const options: RequestInit = {
    method: "GET",
    headers: {
      authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch agencies: ${response.statusText}`);
    }

    const agencies = (await response.json()) as Agency[];
    return agencies;
  } catch (error) {
    console.error("Error fetching agencies:", error);
    throw error;
  }
}
