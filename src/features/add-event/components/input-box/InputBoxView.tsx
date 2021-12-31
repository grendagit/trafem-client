import React from 'react'
import type { PropsWithChildren } from 'react'

import { boxStyle, labelStyle } from './input-box.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material'

type Props = {
  label: string
  labelProps?: BoxProps
}

export const InputBoxView = ({
  label,
  labelProps: { sx: labelSx, ...labelRest } = {},
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Box sx={boxStyle}>
      <Box sx={prepareStyles(labelStyle, labelSx, false)} {...labelRest}>
        {label}
      </Box>
      {children}
    </Box>
  )
}
