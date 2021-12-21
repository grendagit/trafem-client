import React from 'react'
import { Link } from 'gatsby'

import type { TRoute } from './navigation.types'
import type { TTestID } from '../../../../types/test.type'

import { Stack } from '@mui/material'

type Props = {
  routes: TRoute[]
} & TTestID

export const NavigationView = ({ routes, ...rest }: Props) => {
  const routeItems = routes.map(({ path, text }) => (
    <Link to={path} key={path}>
      {text}
    </Link>
  ))

  return (
    <nav {...rest}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        paddingX={2}
      >
        {routeItems}
      </Stack>
    </nav>
  )
}
