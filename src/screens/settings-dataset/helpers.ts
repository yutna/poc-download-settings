export function splitStringToArray({
  str,
  target = ",",
}: {
  str: string;
  target?: string;
}) {
  return str
    .trim()
    .split(target)
    .map((item) => item.trim());
}
