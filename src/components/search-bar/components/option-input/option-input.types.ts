import { Keys } from '../../../option'

export type Type = { type: Keys }
export type OnClick = (
  type: Type['type'],
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void
