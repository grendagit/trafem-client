import React from 'react'

import { paperStyle } from './map-popup-list.styles'
import type { MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties } from '../map-with-clusters'

import { Paper, ListItem } from '@mui/material'
import { FixedSizeList } from 'react-window'
import type { ListChildComponentProps } from 'react-window'

const renderItem = ({ index, style }: ListChildComponentProps) => {
  return (
    <ListItem component="div" style={style} key={index}>
      {index}
    </ListItem>
  )
}

type Props = {
  features: MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties[]
}

export const MapPopupListView = ({ features }: Props) => {
  return (
    <Paper elevation={2} sx={paperStyle}>
      <FixedSizeList
        itemData={features}
        itemCount={features.length}
        itemSize={40}
        overscanCount={5}
        height={360}
        width={225}
        className="mapboxgl-popup-list"
      >
        {renderItem}
      </FixedSizeList>
    </Paper>
  )
}
