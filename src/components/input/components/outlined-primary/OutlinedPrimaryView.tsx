import React, { forwardRef } from 'react'
import type { ComponentProps } from 'react'

import { InputView } from '../../InputView'
import { inputStyle } from './outlined-primary.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

type Props = ComponentProps<typeof InputView>

export const OutlinedPrimaryView = forwardRef(({ sx, ...rest }: Props, ref) => {
  return (
    <InputView ref={ref} sx={prepareStyles(inputStyle, sx, false)} {...rest} />
  )
})
