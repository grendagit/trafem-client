import React from 'react'
import { Link } from 'gatsby'

import { Route } from './navigation.types'
import { TestID } from '../../types/test.type'
import { listStyle, listItemStyle } from './navigation.styles'

import { List, ListItem } from '@mui/material'

type Props = {
  routes: Route[]
} & TestID

export const NavigationView = ({ routes, ...rest }: Props) => {
  const routeItems = routes.map(({ path, text }) => (
    <ListItem disablePadding sx={listItemStyle} key={path}>
      <Link to={path}>{text}</Link>
    </ListItem>
  ))

  return (
    <nav {...rest}>
      <List disablePadding sx={listStyle}>
        {routeItems}
      </List>
    </nav>
  )
}
