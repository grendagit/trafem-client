import React, { forwardRef } from 'react'
import type { ComponentProps } from 'react'

import { OutlinedPrimaryInput } from '../../../input'
import { inputLabelStyle, inputStyle } from './primary-input.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

type Props = ComponentProps<typeof OutlinedPrimaryInput>

export const PrimaryInputView = forwardRef(
  (
    {
      sx,
      inputLabelProps: { sx: inputLabelSx, ...inputLabelRest } = {},
      ...rest
    }: Props,
    ref
  ) => {
    return (
      <OutlinedPrimaryInput
        ref={ref}
        sx={prepareStyles(inputStyle, sx, false)}
        inputLabelProps={{
          sx: prepareStyles(inputLabelStyle, inputLabelSx, false),
          ...inputLabelRest,
        }}
        {...rest}
      />
    )
  }
)
