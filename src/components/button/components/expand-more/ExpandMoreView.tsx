import React, { ComponentProps } from 'react'

import { ButtonView } from '../../ButtonView'
import { OutlinedPrimaryButton } from '../outlined-primary'
import { TextPrimaryButton } from '../text-primary'
import { buttonStyle, endIconStyle } from './expand-more.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

import { SvgIconProps, SvgIcon } from '@mui/material'

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
          <SvgIcon sx={prepareStyles(endIconStyle, endIconSx)} {...endIconRest}>
            <path d="M 7.4296875 9.5 L 5.9296875 11 L 12 17.070312 L 18.070312 11 L 16.570312 9.5 L 12 14.070312 L 7.4296875 9.5 z" />
          </SvgIcon>
        </div>
      }
      sx={prepareStyles(buttonStyle, sx, false)}
      {...(rest as any)}
    />
  )
}
