import React from 'react'

import { Option } from '../../../option'
import type { TType as TOptionType } from '../../../option'
import { NumberOf } from '../../../number-of'
import {
  outerBoxStyle,
  innerBoxStyle,
  numberOfStyle,
} from './map-marker.styles'

import { Box } from '@mui/material'

type Props = {
  type: TOptionType
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
