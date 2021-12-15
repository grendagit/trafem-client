import React, { useState, useEffect } from 'react'

import { Logo } from '../logo'
import { Navigation } from './components/navigation'
import { Account } from './components/account'
import type { TRoute } from './components/navigation'
import type { TTestID } from '../../types/test.type'
import {
  appBarStyle,
  toolBarStyle,
  navigationBoxStyle,
  dividerStyle,
  menuIconButtonBoxStyle,
  menuIconButtonStyle,
} from './header.styles'
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
import { Auth } from 'aws-amplify'

const navigationRoutes: TRoute[] = [
  {
    path: '/add-offer',
    text: 'Zamieść ofertę',
  },
  {
    path: '/auth/sign-in',
    text: 'Zaloguj się',
  },
]

type Props = TTestID

export const HeaderView = (props: Props) => {
  /**
   * TODO: separate
   */
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  useEffect(() => {
    async function checkIfAuthenticated() {
      try {
        /**
         * will throw an error if there is no authenticated user
         */
        await Auth.currentAuthenticatedUser()

        setIsAuthenticated(true)
      } catch (error) {
        /**
         * TODO: show the user relevant information
         */
      }
    }
    checkIfAuthenticated()
  }, [])

  return (
    <AppBar position="sticky" elevation={0} sx={appBarStyle} {...props}>
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
            <Navigation routes={navigationRoutes} />
          </Box>
          {isAuthenticated && <Account />}
        </Stack>
        {isAuthenticated || (
          <Divider orientation="vertical" sx={dividerStyle} />
        )}
        <Box sx={menuIconButtonBoxStyle}>
          <IconButton sx={menuIconButtonStyle}>
            <SvgIcon component={Menu} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
