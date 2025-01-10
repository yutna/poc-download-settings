import { AUTH_TOKEN, BASE_API_URL } from "@/config/env";
import type { DriverDropdown } from "./types";

export default async function getDriverDropdown(
  driverType: string,
  withContext: boolean = true
) {
  const searchParams = new URLSearchParams({
    driverType,
    withContext: String(withContext),
  }).toString();

  const url = `${BASE_API_URL}/v3/driver/dropdown?${searchParams}`;
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
        `Failed to fetch driver dropdown: ${response.statusText}`
      );
    }

    const data = (await response.json()) as DriverDropdown[];

    return data;
  } catch (error) {
    console.error("Error fetching driver dropdown:", error);
    throw error;
  }
}
