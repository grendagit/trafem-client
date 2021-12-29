import React from 'react'
import type { PropsWithChildren } from 'react'

import { boxStyle } from './auth.styles'

import { Box } from '@mui/material'

type Props = {}

export const AuthView = ({ children }: PropsWithChildren<Props>) => {
  return <Box sx={boxStyle}>{children}</Box>
}
