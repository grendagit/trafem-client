import type { TOptionType } from '../../../option'

export type TDropdownItem = {
  label: string
  ID: string
  type: TOptionType
  [key: string]: any
}
