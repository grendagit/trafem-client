import React from 'react'

import { Logo } from '../logo'
import { Navigation } from '../navigation'

import { IconButton } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import tw from 'twin.macro'

const navigationRoutes = [
  {
    path: 'add-offer',
    text: 'Zamieść ofertę',
  },
  {
    path: 'sign-in',
    text: 'Zaloguj się',
  },
]

export const HeaderView = () => {
  return (
    <header
      className="bg-white text-gray-400 font-sans text-sm font-light"
      data-testid="header"
    >
      <div className="h-12 px-4 flex justify-between items-center gap-x-12 border-b border-gray-200">
        <div>
          <Logo />
        </div>
        <div className="flex-1">
          <Navigation routes={navigationRoutes} />
        </div>
        <div>
          <IconButton
            sx={{
              ...tw`text-crayola hover:bg-black hover:bg-opacity-5`,
            }}
          >
            <MenuOutlined />
          </IconButton>
        </div>
      </div>
    </header>
  )
}
