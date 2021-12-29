import React from 'react'
import type { PropsWithChildren } from 'react'

import { paperStyle, headerBoxStyle, titleStyle } from './container.styles'

import { Paper, Box } from '@mui/material'

type Props = {
  title: string
}

export const ContainerView = ({
  title,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Paper sx={paperStyle}>
      <Box sx={headerBoxStyle}>
        <Box component="h1" sx={titleStyle}>
          {title}
        </Box>
      </Box>
      {children}
    </Paper>
  )
}
