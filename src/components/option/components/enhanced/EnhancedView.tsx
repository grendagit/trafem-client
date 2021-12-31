import React from 'react'
import type { ComponentProps } from 'react'

import { OptionView } from '../../OptionView'

import { outerBoxStyle, innerBoxStyle, paragraphStyle } from './enhanced.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

import { Stack, Box } from '@mui/material'

type Props = { label: string } & ComponentProps<typeof OptionView>

export const EnhancedView = ({
  label,
  outerBoxProps: { sx: outerBoxSx, ...outerBoxRest } = {},
  innerBoxProps: { sx: innerBoxSx, ...innerBoxRest } = {},
  ...rest
}: Props) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={0}>
      <OptionView
        fontSize="medium"
        outerBoxProps={{
          sx: prepareStyles(outerBoxStyle, outerBoxSx, false),
          ...outerBoxRest,
        }}
        innerBoxProps={{
          sx: prepareStyles(innerBoxStyle, innerBoxSx, false),
          ...innerBoxRest,
        }}
        {...rest}
      />
      <Box component="p" sx={paragraphStyle}>
        {label}
      </Box>
    </Stack>
  )
}
