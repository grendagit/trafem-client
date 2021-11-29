export function getNumberOfFilters(...values: any[]): number {
  return values.filter(Boolean).length
}
