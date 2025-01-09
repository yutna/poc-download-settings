import type { ParameterRow } from "@/components/form-process-settings";

export function convertRowsToObject(
  rows: ParameterRow[]
): Record<string, string> {
  return rows.reduce((acc, { key, value }) => {
    if (key.trim() !== "") {
      acc[key] = value;
    }

    return acc;
  }, {} as Record<string, string>);
}

export function getParameterRows(
  parameter: Record<string, string>
): ParameterRow[] {
  const rows = Object.entries(parameter).map(([k, v]) => ({
    key: k,
    value: v,
  }));

  rows.push({ key: "", value: "" });

  return rows;
}
