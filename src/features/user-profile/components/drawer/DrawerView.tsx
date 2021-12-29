import React from 'react'
import { Link } from 'gatsby'

import type { TRoute } from './drawer.types'
import {
  drawerStyle,
  paperStyle,
  linkStyle,
  activeLinkStyle,
  textLinkStyle,
} from './drawer.styles'

import { Drawer, Stack, Box, SvgIcon } from '@mui/material'

const drawerWidth = 250

type Props = {
  routes: TRoute[]
}

export const DrawerView = ({ routes }: Props) => {
  const routeItems = routes.map(({ text, path, icon }) => (
    <Box component="li" key={path}>
      <Link style={linkStyle} activeStyle={activeLinkStyle} to={path}>
        <SvgIcon component={icon}></SvgIcon>
        <Box component="span" sx={textLinkStyle}>
          {text}
        </Box>
      </Link>
    </Box>
  ))

  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          ...paperStyle,
          width: drawerWidth,
        },
      }}
      sx={{
        ...drawerStyle,
        width: drawerWidth,
      }}
    >
      <Stack
        direction="column"
        justifyContent="start"
        alignItems="start"
        spacing={1}
        paddingY={3}
        component="ul"
      >
        {routeItems}
      </Stack>
    </Drawer>
  )
}
