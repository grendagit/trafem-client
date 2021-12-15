import React from 'react'
import type { ComponentProps } from 'react'

import { ButtonView } from '../../ButtonView'
import { buttonStyle } from './text-primary.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

type Props = Omit<ComponentProps<typeof ButtonView>, 'variant'>

export const TextPrimaryView = ({ sx, ...rest }: Props) => {
  return <ButtonView sx={prepareStyles(buttonStyle, sx, false)} {...rest} />
}
