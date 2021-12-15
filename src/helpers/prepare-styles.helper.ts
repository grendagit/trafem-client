import type { SxProps } from '@mui/system'
import type { Theme } from '@mui/material'
import type { TwStyle } from 'twin.macro'
import * as R from 'ramda'

export function prepareStyles(
  styles?: TwStyle,
  sxStyles?: SxProps<Theme>,
  override: boolean = true
) {
  const merge = override ? R.mergeDeepRight : R.mergeDeepLeft
  return merge(styles || {}, sxStyles || {}) as SxProps<Theme>
}
