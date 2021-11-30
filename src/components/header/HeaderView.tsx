import React from 'react'

import { Logo } from '../logo'
import { Navigation, Route } from '../navigation'
import { TestID } from '../../types/test.type'
import {
  appBarStyle,
  toolBarStyle,
  boxStyle,
  iconButtonStyle,
} from './header.styles'

import { AppBar, Toolbar, IconButton, Box, SvgIcon } from '@mui/material'

const navigationRoutes: Route[] = [
  {
    path: 'add-offer',
    text: 'Zamieść ofertę',
  },
  {
    path: 'sign-in',
    text: 'Zaloguj się',
  },
]

type Props = TestID

export const HeaderView = (props: Props) => {
  return (
    <AppBar position="sticky" elevation={0} sx={appBarStyle} {...props}>
      <Toolbar variant="dense" sx={toolBarStyle}>
        <Box>
          <Logo />
        </Box>
        <Box sx={boxStyle}>
          <Navigation routes={navigationRoutes} />
        </Box>
        <Box>
          <IconButton sx={iconButtonStyle}>
            <SvgIcon>
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
            </SvgIcon>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
