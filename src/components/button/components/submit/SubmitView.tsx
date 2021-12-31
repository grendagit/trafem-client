import React from 'react'
import type { ComponentProps } from 'react'

import { ButtonView } from '../../ButtonView'
import { submitButtonStyle } from './submit.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

type Props = Omit<ComponentProps<typeof ButtonView>, 'type'>

export const SubmitView = ({ sx, ...rest }: Props) => {
  return (
    <ButtonView
      type="submit"
      sx={prepareStyles(submitButtonStyle, sx)}
      {...rest}
    />
  )
}
