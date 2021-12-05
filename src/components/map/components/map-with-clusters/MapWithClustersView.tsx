import React, { useMemo, useCallback } from 'react'

import { MapView } from '../../MapView'
import {
  addPopupListeners,
  createGeoJSONObject,
  getUpdateMarkers,
} from './map-with-clusters.helpers'
import { Material } from './map-with-clusters.types'

import { Popup, PopupOptions, GeoJSONSourceRaw } from 'mapbox-gl'

type Props = {
  materials?: Material[]
  sourceOptions?: Omit<GeoJSONSourceRaw, 'type' | 'data' | 'cluster'>
  popupOptions?: Omit<PopupOptions, 'anchor' | 'closeButton'>
}

export const MapWithClustersView = ({
  materials = [],
  sourceOptions,
  popupOptions,
}: Props) => {
  const information = useMemo(
    () =>
      materials.map(({ mapMarkers, ...rest }) => ({
        features: mapMarkers.map(createGeoJSONObject),
        ...rest,
      })),
    []
  )

  const handleLoad = useCallback(event => {
    const map = event.target

    const popup = new Popup({
      anchor: 'bottom',
      closeButton: false,
      offset: 25,
      ...popupOptions,
    })

    information.map(({ sourceID, features, type }) => {
      // adds a clustered GeoJSON source
      map.addSource(sourceID, {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features,
        },
        cluster: true,
        clusterRadius: 128,
        buffer: 512,
        ...sourceOptions,
      })

      const layerIDs = {
        unclustered: `unclustered-${sourceID}`,
        clustered: `clustered-${sourceID}`,
      }
      const layerExistentialFilters = {
        unclustered: '!has',
        clustered: 'has',
      }
      // layers for rendering clustered and unclustered points
      Object.entries(layerIDs).forEach(([key, layerID]) => {
        const existentialFilter =
          layerExistentialFilters[key as keyof typeof layerIDs]
        map.addLayer({
          id: layerID,
          filter: [existentialFilter, 'point_count'],
          type: 'circle',
          source: sourceID,
          paint: {
            'circle-color': 'transparent',
            'circle-radius': 16, // needs to be the same as marker element
          },
        })
      })

      addPopupListeners(sourceID, layerIDs, type, popup, map)

      // after the GeoJSON data is loaded, updates markers on the screen on every frame
      const updateMarkers = getUpdateMarkers()
      map.on('render', () => {
        if (map.isSourceLoaded(sourceID)) {
          updateMarkers(sourceID, type, popup, map)
        }
      })
    })
  }, [])

  return <MapView onLoad={handleLoad} />
}
