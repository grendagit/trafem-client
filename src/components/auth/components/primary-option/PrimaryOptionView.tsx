import React from 'react'
import { Link } from 'gatsby'

import type { TRoute } from './primary-option.types'
import { optionPharsingStyle, optionStackStyle } from './primary-option.styles'

import { Stack, Box } from '@mui/material'

type Props = {
  text: string
  route: TRoute
}

export const PrimaryOptionView = ({ text, route }: Props) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={optionStackStyle}
    >
      <Box component="p">
        {text}{' '}
        <Link to={route.path}>
          <Box component="span" sx={optionPharsingStyle}>
            {route.text}
          </Box>
        </Link>
      </Box>
    </Stack>
  )
}
