import React, { useState, useRef, useEffect } from 'react'

import { transformCenter } from './map.helpers'
import { boxStyle, mapContainerBoxStyle } from './map.styles'

import { Map } from 'mapbox-gl'
import type {
  MapboxOptions,
  MapEventType,
  EventData,
  LngLatBoundsLike,
} from 'mapbox-gl'
import { Box } from '@mui/material'

type Props = {
  mapOptions?: Omit<MapboxOptions, 'container'>
  onInitialize?: (event: MapEventType['load'] & EventData) => void
}

export const MapView = ({ mapOptions, onInitialize }: Props) => {
  const [lng, setLng] = useState<number>(19.30063630556)
  const [lat, setLat] = useState<number>(52.1246099075455)
  const [zoom, setZoom] = useState<number>(0)
  const [bounds, _] = useState<LngLatBoundsLike>([
    14.1229290098701, 49.0020460154192, 24.1455979034865, 54.8932281999438,
  ])

  const mapContainerRef = useRef<HTMLElement | string>(null!)
  const mapRef = useRef<Map>(null!)

  /**
   * initializes the map
   */
  useEffect(() => {
    mapRef.current = new Map({
      container: mapContainerRef.current,
      style: process.env.GATSBY_MAP_STYLE,
      accessToken: process.env.GATSBY_MAP_ACCESS_TOKEN,
      center: [lng, lat],
      zoom,
      bounds,
      attributionControl: false,
      ...mapOptions,
    })

    const map = mapRef.current

    return () => map.remove()
  }, [])

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current

      if (onInitialize) {
        map.on('initialize', onInitialize)
      }

      map.fire('initialize')
    }
  }, [onInitialize])

  /**
   * stores the new coords
   */
  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current

      map.on('move', event => {
        const map = event.target

        const center = transformCenter(map.getCenter())
        const zoom = map.getZoom()

        setLng(center[0])
        setLat(center[1])
        setZoom(zoom.toFixed(2) as unknown as number)
      })
    }
  }, [mapRef.current])

  return (
    <Box sx={boxStyle}>
      <Box ref={mapContainerRef} sx={mapContainerBoxStyle} />
    </Box>
  )
}
