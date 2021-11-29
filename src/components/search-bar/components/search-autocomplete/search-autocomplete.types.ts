import { Keys } from '../../../option'

export type Item = {
  label: string
  ID: string
  type: Keys
  [key: string]: any
}
