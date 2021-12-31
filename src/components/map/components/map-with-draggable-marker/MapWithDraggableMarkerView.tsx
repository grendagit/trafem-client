import React, { useCallback, useEffect, useState } from 'react'

import { MapView } from '../../MapView'

import { Map, Marker } from 'mapbox-gl'
import type { LngLatLike } from 'mapbox-gl'

type Props = {
  markerPosition?: LngLatLike
  onMarkerDragEnd?: any
}

export const MapWithDraggableMarkerView = ({
  markerPosition = [19.30063630556, 52.1246099075455],
  onMarkerDragEnd,
}: Props) => {
  const [marker, setMarker] = useState<Marker>(null!)
  const [map, setMap] = useState<Map>(null!)

  useEffect(() => {
    if (map) {
      if (!marker) {
        const marker = new Marker({
          draggable: true,
          color: '#bced91',
        })
          .setLngLat(markerPosition)
          .addTo(map)
        setMarker(marker)

        if (onMarkerDragEnd) {
          marker.on('dragend', () => {
            const { lng, lat } = marker.getLngLat()
            onMarkerDragEnd?.([lng, lat])
          })
        }

        map.on('click', event => {
          const { lng, lat } = event.lngLat

          marker.setLngLat([lng, lat])
        })

        return () => {
          marker.remove()
        }
      }
    }
  }, [map])

  const handleInitialize = useCallback(event => {
    const map = event.target as Map
    setMap(map)
  }, [])

  return <MapView onInitialize={handleInitialize} />
}
