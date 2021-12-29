import React from 'react'
import { Link } from 'gatsby'

import type { TTestId } from '../../types/test.type'

import { Box } from '@mui/material'

type Props = TTestId

export const LogoView = (props: Props) => {
  return (
    <Box {...props}>
      <Link to="/"></Link>
    </Box>
  )
}
