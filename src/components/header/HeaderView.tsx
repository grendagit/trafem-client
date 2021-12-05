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
import Menu from '../../assets/svg/icons/menu.inline.svg'

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
            <SvgIcon component={Menu} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
