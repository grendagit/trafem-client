import React, { forwardRef } from 'react'

import { inputStyle, inputLabelStyle } from './input.styles'
import { prepareStyles } from '../../helpers/prepare-styles.helper'

import { InputBase, InputLabel } from '@mui/material'
import type { InputBaseProps, InputLabelProps } from '@mui/material'

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
