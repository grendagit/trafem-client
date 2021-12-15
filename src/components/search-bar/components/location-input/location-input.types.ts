export type TRegion = {
  name: string
  cities: string[]
}
export type TOnClick = (
  location: string,
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void
