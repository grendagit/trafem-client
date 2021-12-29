import React from 'react'
import type { ComponentProps } from 'react'

import { ButtonView } from '../../ButtonView'
import { OutlinedPrimaryButton } from '../outlined-primary'
import { TextPrimaryButton } from '../text-primary'
import { buttonStyle, endIconStyle } from './expand-more.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'
// Icons
import ExpandArrow from '../../../../assets/svg/icons/expand-arrow.inline.svg'

import { SvgIcon } from '@mui/material'
import type { SvgIconProps } from '@mui/material'

const Components = {
  text: TextPrimaryButton,
  outlined: OutlinedPrimaryButton,
  custom: ButtonView,
}

type Keys = keyof typeof Components
type Props<T extends Keys> = {
  nature: T
  expanded?: boolean
  endIconProps?: SvgIconProps
} & Omit<ComponentProps<typeof Components[T]>, 'endIcon'>

export const ExpandMoreView = <T extends Keys>({
  nature,
  expanded,
  endIconProps: { sx: endIconSx, ...endIconRest } = {},
  sx,
  ...rest
}: Props<T>) => {
  const Component = Components[nature]

  return (
    <Component
      endIcon={
        <div className={`transform ${expanded ? 'rotate-180' : 'rotate-0'}`}>
          <SvgIcon
            component={ExpandArrow}
            sx={prepareStyles(endIconStyle, endIconSx)}
            {...endIconRest}
          />
        </div>
      }
      sx={prepareStyles(buttonStyle, sx, false)}
      {...(rest as any)}
    />
  )
}
