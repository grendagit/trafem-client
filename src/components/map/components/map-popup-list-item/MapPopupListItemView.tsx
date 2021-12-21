import React from 'react'

import {
  prepareDuration,
  prepareParticipationPrice,
} from '../../../listing/components/event'
import {
  listItemButtonStyle,
  headerBoxStyle,
  titleStyle,
  participationPriceStyle,
  dateStyle,
} from './map-popup-list-item.styles'

import { Box, ListItem, ListItemButton } from '@mui/material'
import type { ListChildComponentProps } from 'react-window'

export const MapPopupListItemView = ({
  index,
  style,
  data,
}: ListChildComponentProps) => {
  const {
    title,
    participation_price_min,
    participation_price_max,
    duration_from,
    duration_to,
  } = data[index].properties
  return (
    <ListItem component="div" disablePadding style={style} key={index}>
      <ListItemButton component="a" href="/" sx={listItemButtonStyle}>
        <Box sx={headerBoxStyle}>
          <Box component="h2" sx={titleStyle}>
            {title}
          </Box>
          <Box component="span" sx={participationPriceStyle}>
            {prepareParticipationPrice(
              participation_price_min,
              participation_price_max
            )}
          </Box>
        </Box>
        <Box component="p" sx={dateStyle}>
          {prepareDuration(duration_from, duration_to)}
        </Box>
      </ListItemButton>
    </ListItem>
  )
}
