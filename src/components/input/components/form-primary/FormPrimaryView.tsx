import React, { forwardRef } from 'react'
import type { ComponentProps } from 'react'

import { OutlinedPrimaryInput } from '../..'
import { inputStyle, inputErrorMessageStyle } from './form-primary.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

import { Box, Stack } from '@mui/material'
import type { SxProps } from '@mui/system'
import type { Theme } from '@mui/material'

type Props = {
  errorMessage?: string
  inputErrorMessageSx?: SxProps<Theme>
} & ComponentProps<typeof OutlinedPrimaryInput>

export const FormPrimaryView = forwardRef(
  ({ errorMessage, inputErrorMessageSx, sx, ...rest }: Props, ref) => {
    const { fullWidth } = rest
    return (
      <Stack spacing={1} sx={{ width: fullWidth ? '100%' : 'auto' }}>
        <OutlinedPrimaryInput
          ref={ref}
          sx={prepareStyles(inputStyle, sx, false)}
          {...rest}
        />
        {errorMessage && (
          <Box
            component="p"
            sx={prepareStyles(
              inputErrorMessageStyle,
              inputErrorMessageSx,
              false
            )}
          >
            {errorMessage}
          </Box>
        )}
      </Stack>
    )
  }
)
