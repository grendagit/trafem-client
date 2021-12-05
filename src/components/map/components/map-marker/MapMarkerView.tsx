import React from 'react'

import { Option, Keys } from '../../../option'
import { NumberOf } from '../../../number-of'
import {
  innerBoxStyle,
  numberOfStyle,
  outerBoxStyle,
} from './map-marker.styles'

import { Box } from '@mui/material'

type Props = {
  type: Keys
  pointCount?: number
}

export const MapMarkerView = ({ type, pointCount }: Props) => {
  return (
    <Box>
      <Option
        type={type}
        fontSize="medium"
        outerBoxProps={{ sx: outerBoxStyle }}
        innerBoxProps={{ sx: innerBoxStyle }}
      />
      {pointCount && <NumberOf number={pointCount} sx={numberOfStyle} />}
    </Box>
  )
}
