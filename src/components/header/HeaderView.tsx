import React from 'react'

import { useAuthContext } from '../../contexts'
import { Logo } from '../logo'
import { Navigation } from './components/navigation'
import { Account } from './components/account'
import type { TRoute } from './components/navigation'
import type { TTestId } from '../../types/test.type'
import {
  appBarStyle,
  toolBarStyle,
  navigationBoxStyle,
  dividerStyle,
  menuIconButtonBoxStyle,
  menuIconButtonStyle,
} from './header.styles'
// Icons
import Menu from '../../assets/svg/icons/menu.inline.svg'

import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  SvgIcon,
  Stack,
  Divider,
} from '@mui/material'

const navigationRoutes: TRoute[] = [
  {
    path: '/add-offer',
    text: 'Zamieść wydarzenie',
  },
]
const authenticatedNavigationRoutes: TRoute[] = [...navigationRoutes]
const unautheticatedNavigationRoutes: TRoute[] = [
  ...navigationRoutes,
  {
    path: '/auth/sign-in',
    text: 'Zaloguj się',
  },
]

type Props = TTestId

export const HeaderView = (props: Props) => {
  const { isAuthenticated } = useAuthContext()

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ ...appBarStyle, zIndex: theme => theme.zIndex.drawer + 1 }}
      {...props}
    >
      <Toolbar variant="dense" sx={toolBarStyle}>
        <Box>
          <Logo />
        </Box>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          flex={1}
          spacing={0.5}
        >
          <Box sx={navigationBoxStyle}>
            <Navigation
              routes={
                isAuthenticated
                  ? authenticatedNavigationRoutes
                  : unautheticatedNavigationRoutes
              }
            />
          </Box>
          {isAuthenticated && <Account />}
        </Stack>
        <>
          {isAuthenticated || (
            <Divider orientation="vertical" sx={dividerStyle} />
          )}
        </>
        <Box sx={menuIconButtonBoxStyle}>
          <IconButton sx={menuIconButtonStyle}>
            <SvgIcon component={Menu} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
