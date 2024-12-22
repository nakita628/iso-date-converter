/**
 * dateConvert
 * @param str
 * @returns string
 */
export function dateConvert(str: string): string {
  const date = new Date(str)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
