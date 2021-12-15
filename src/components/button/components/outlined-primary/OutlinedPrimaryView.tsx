import React from 'react'
import type { ComponentProps } from 'react'

import { ButtonView } from '../../ButtonView'
import { buttonStyle } from './outlined-primary.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

type Props = Omit<ComponentProps<typeof ButtonView>, 'variant'>

export const OutlinedPrimaryView = ({ sx, ...rest }: Props) => {
  return (
    <ButtonView
      variant="outlined"
      sx={prepareStyles(buttonStyle, sx, false)}
      {...rest}
    />
  )
}
