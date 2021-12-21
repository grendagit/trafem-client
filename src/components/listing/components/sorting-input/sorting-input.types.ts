export type TSortingTypes = string[]
export type TOnClick = (
  sortingType: string,
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void
