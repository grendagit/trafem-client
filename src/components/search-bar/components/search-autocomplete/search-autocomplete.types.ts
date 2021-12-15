import type { TType as TOptionType } from '../../../option'

export type Item = {
  label: string
  ID: string
  type: TOptionType
  [key: string]: any
}
