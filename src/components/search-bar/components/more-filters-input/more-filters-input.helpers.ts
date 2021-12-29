export function getNumberOfFilters(...values: any[]) {
  return values.filter(Boolean).length
}
