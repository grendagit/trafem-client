import type { TType } from '../../option.types'

export type TMaterial = {
  type: TType
  label: string
}
export type TOnOptionClick = (
  type: TMaterial['type'],
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void
