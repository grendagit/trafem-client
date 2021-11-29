export type Voivodeship = {
  name: string
  cities: string[]
}
export type OnClick = (
  location: string,
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void
