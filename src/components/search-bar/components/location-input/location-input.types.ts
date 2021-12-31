export type TRegion = {
  name: string
  cities: string[]
}
export type TOnLocationGridItemClick = (
  location: string,
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void
