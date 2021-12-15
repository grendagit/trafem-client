import type { TType as TOptionType } from '../../../option'

export type TMaterial = {
  type: TOptionType
  label: string
}
export type TOnClick = (
  type: TMaterial['type'],
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void
