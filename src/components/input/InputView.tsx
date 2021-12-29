import React, { forwardRef } from 'react'

import { inputLabelStyle, inputStyle } from './input.styles'
import { prepareStyles } from '../../helpers/prepare-styles.helper'

import { InputLabel, InputBase } from '@mui/material'
import type { InputLabelProps, InputBaseProps } from '@mui/material'

type Props = {
  inputLabel?: string
  inputLabelProps?: InputLabelProps
} & InputBaseProps

export const InputView = forwardRef(
  (
    {
      inputLabel,
      inputLabelProps: { sx: inputLabelSx, ...restInputLabel } = {},
      sx,
      ...rest
    }: Props,
    ref
  ) => {
    return (
      <>
        {inputLabel && (
          <InputLabel
            htmlFor={rest.id}
            sx={prepareStyles(inputLabelStyle, inputLabelSx)}
            {...restInputLabel}
          >
            {inputLabel}
          </InputLabel>
        )}
        <InputBase ref={ref} sx={prepareStyles(inputStyle, sx)} {...rest} />
      </>
    )
  }
)
