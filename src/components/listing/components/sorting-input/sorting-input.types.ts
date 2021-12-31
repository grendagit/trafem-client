export type TSortingTypes = string[]
export type TOnSortingTypeItemClick = (
  sortingType: string,
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void
