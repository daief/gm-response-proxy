export function safeParse(str: string) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return str;
  }
}
