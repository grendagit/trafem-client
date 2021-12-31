import React from 'react'

import { prepareDuration, prepareParticipationPrice } from './event.helpers'
import type { TEvent } from '../../../../types/event.type'
import {
  containerBoxStyle,
  cardStyle,
  cardContentStyle,
  cardContextBoxStyle,
  headerBoxStyle,
  titleStyle,
  participationPriceStyle,
  dateStyle,
  descriptionStyle,
  descriptionBoxStyle,
} from './event.styles'

import { Box, Card, CardContent } from '@mui/material'
import type { ListChildComponentProps } from 'react-window'

export const EventView = ({
  index,
  style,
  data,
}: Omit<ListChildComponentProps, 'data'> & { data: TEvent[] }) => {
  const {
    title,
    description,
    participation_price_min,
    participation_price_max,
    duration_from,
    duration_to,
  } = data[index]

  return (
    <Box style={style} sx={containerBoxStyle} key={index}>
      <Card component="a" href="/" elevation={2} sx={cardStyle}>
        <CardContent sx={cardContentStyle}>
          <Box sx={{ ...cardContextBoxStyle, ...headerBoxStyle }}>
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
          <Box sx={cardContextBoxStyle}>
            <Box component="p" sx={dateStyle}>
              {prepareDuration(duration_from, duration_to)}
            </Box>
          </Box>
          <Box sx={{ ...cardContextBoxStyle, ...descriptionBoxStyle }}>
            <Box component="p" sx={descriptionStyle}>
              {description}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
