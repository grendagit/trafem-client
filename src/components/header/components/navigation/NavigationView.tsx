import React from 'react'
import { Link } from 'gatsby'

import type { TRoute } from './navigation.types'
import type { TTestId } from '../../../../types/test.type'

import { Stack, Box } from '@mui/material'

type Props = {
  routes: TRoute[]
} & TTestId

export const NavigationView = ({ routes, ...rest }: Props) => {
  const routeItems = routes.map(({ path, text }) => (
    <Box component="li" key={path}>
      <Link to={path}>{text}</Link>
    </Box>
  ))

  return (
    <nav {...rest}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        paddingX={2}
        component="ul"
      >
        {routeItems}
      </Stack>
    </nav>
  )
}
