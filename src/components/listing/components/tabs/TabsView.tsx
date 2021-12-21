import React from 'react'
import { Link } from 'gatsby'

import { SortingInput } from '../sorting-input'
import type { TTab } from './tabs.types'
import type { TSortingTypes } from '../sorting-input/sorting-input.types'
import {
  boxStyle,
  linkStyle,
  activeLinkStyle,
  sortingInputBoxStyles,
} from './tabs.styles'

import { Stack, Box } from '@mui/material'

type Props = {
  tabs: TTab[]
  sortingTypes: TSortingTypes
}

export const TabsView = ({ tabs, sortingTypes }: Props) => {
  const tabItems = tabs.map(({ path, text }) => (
    <Link to={path} key={path} style={linkStyle} activeStyle={activeLinkStyle}>
      {text}
    </Link>
  ))

  return (
    <Box sx={boxStyle}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
        paddingX={3}
      >
        {tabItems}
      </Stack>
      <Box sx={sortingInputBoxStyles}>
        <SortingInput sortingTypes={sortingTypes} />
      </Box>
    </Box>
  )
}
