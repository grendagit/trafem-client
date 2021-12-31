import React, { forwardRef } from 'react'

import { boxStyle, inputLabelStyle, inputStyle } from './input.styles'
import { prepareStyles } from '../../helpers/prepare-styles.helper'

import { Box, InputLabel, InputBase } from '@mui/material'
import type { BoxProps, InputLabelProps, InputBaseProps } from '@mui/material'

type Props = {
  boxProps?: BoxProps
  inputLabel?: string
  inputLabelProps?: InputLabelProps
} & InputBaseProps

export const InputView = forwardRef(
  (
    {
      boxProps: { sx: boxSx, ...boxRest } = {},
      inputLabel,
      inputLabelProps: { sx: inputLabelSx, ...restInputLabel } = {},
      sx,
      ...rest
    }: Props,
    ref
  ) => {
    const { id } = rest
    return (
      <Box sx={prepareStyles(boxStyle, boxSx)} {...boxRest}>
        {inputLabel && (
          <InputLabel
            htmlFor={id}
            sx={prepareStyles(inputLabelStyle, inputLabelSx)}
            {...restInputLabel}
          >
            {inputLabel}
          </InputLabel>
        )}
        <InputBase ref={ref} sx={prepareStyles(inputStyle, sx)} {...rest} />
      </Box>
    )
  }
)
