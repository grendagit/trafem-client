import React from 'react'

import { Event } from './components/event'
import { Tabs } from './components/tabs'
import type { TTab } from './components/tabs'
import type { TEvent } from '../../types/event.type'
import {
  boxStyle,
  contentBoxStyle,
  fixedSizeListBoxStyle,
  imageAsBackgroundStyle,
  tabsBoxStyle,
} from './listing.styles'

import { Box } from '@mui/material'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

const tabs: TTab[] = [
  {
    path: '/',
    text: 'Wszystkie oferty',
  },
]
const sortingTypes = ['Czas dodania: najnowsze', 'Cena: od najwyższej']

type Props = {
  events: TEvent[]
}

export const ListingView = ({ events }: Props) => {
  return (
    <>
      <Box sx={boxStyle}>
        <img src="/backgrounds/waves.svg" style={imageAsBackgroundStyle} />
        <Box sx={contentBoxStyle}>
          <Box sx={tabsBoxStyle}>
            <Tabs tabs={tabs} sortingTypes={sortingTypes} />
          </Box>
          <Box sx={fixedSizeListBoxStyle}>
            <AutoSizer>
              {({ height, width }) => (
                <FixedSizeList
                  itemData={events}
                  itemCount={events.length}
                  itemSize={140}
                  overscanCount={5}
                  height={height}
                  width={width}
                  className="scrollbar"
                >
                  {Event}
                </FixedSizeList>
              )}
            </AutoSizer>
          </Box>
        </Box>
      </Box>
    </>
  )
}
