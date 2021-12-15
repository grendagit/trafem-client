import React from 'react'
import { Link } from 'gatsby'

import type { TTestID } from '../../types/test.type'

import { Box } from '@mui/material'

type Props = TTestID

export const LogoView = (props: Props) => {
  return (
    <Box {...props}>
      <Link to="/"></Link>
    </Box>
  )
}
