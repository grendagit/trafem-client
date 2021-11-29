import { SxProps } from '@mui/system'
import { Theme } from '@mui/material'
import { TwStyle } from 'twin.macro'
import * as R from 'ramda'

export function prepareStyles(
  styles?: TwStyle,
  sxStyles?: SxProps<Theme>,
  override: boolean = true
) {
  const merge = override ? R.mergeDeepRight : R.mergeDeepLeft
  return merge(styles || {}, sxStyles || {}) as SxProps<Theme>
}
