import React from 'react'

import { MapPopupListItem } from '../map-popup-list-item'
import { paperStyle } from './map-popup-list.styles'
import type { MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties } from '../map-with-clusters'

import { Paper } from '@mui/material'
import { FixedSizeList } from 'react-window'

type Props = {
  features: MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties[]
}

export const MapPopupListView = ({ features }: Props) => {
  const itemSize = 80
  const itemCount = features.length

  return (
    <Paper elevation={2} sx={paperStyle}>
      <FixedSizeList
        itemData={features}
        itemCount={itemCount}
        itemSize={itemSize}
        overscanCount={5}
        height={Math.min(320, itemSize * itemCount)}
        width={225}
        className="scrollbar"
      >
        {MapPopupListItem}
      </FixedSizeList>
    </Paper>
  )
}
