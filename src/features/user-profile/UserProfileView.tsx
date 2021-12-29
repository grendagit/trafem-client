import React from 'react'
import type { RouteComponentProps } from '@reach/router'

import { SEO } from '../../components/SEO'
import { Drawer } from './components/drawer'
import { Details } from './components/details'
import { containerStyle } from './user-profile.styles'
// Icons
import User from '../../assets/svg/icons/user.inline.svg'
import Automation from '../../assets/svg/icons/automation.inline.svg'
import Puzzle from '../../assets/svg/icons/puzzle.inline.svg'
import Settings from '../../assets/svg/icons/settings.inline.svg'
import Shutdown from '../../assets/svg/icons/shutdown.inline.svg'

import { Grid } from '@mui/material'

const drawerRoutes = [
  {
    text: 'Profil',
    path: '/user/profile',
    icon: User,
  },
  {
    text: 'Osobiste preferencje',
    path: '/user/personal-preferences',
    icon: Automation,
  },
  {
    text: 'Dopasowane wydarzenia',
    path: '/user/tailored-events',
    icon: Puzzle,
  },
  {
    text: 'Ustawienia',
    path: '/user/settings',
    icon: Settings,
  },
  {
    text: 'Wyloguj się',
    path: '/',
    icon: Shutdown,
  },
]

type Props = RouteComponentProps

export const UserProfileView = (_: Props) => {
  return (
    <>
      <SEO title="Trafem" description="" />

      <Drawer routes={drawerRoutes} />

      <Grid container sx={containerStyle}>
        <Details />
      </Grid>
    </>
  )
}
