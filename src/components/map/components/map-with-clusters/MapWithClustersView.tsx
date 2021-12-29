import React, { useMemo, useCallback } from 'react'

import { MapView } from '../../MapView'
import {
  addLayerListenersAssociatedWithPopup,
  addPopupListeners,
  createGeoJSONObject,
  getUpdateMarkers,
} from './map-with-clusters.helpers'
import type { TMapMaterial } from './map-with-clusters.types'
import type { TEventType } from '../../../../types/event.type'

import { Popup } from 'mapbox-gl'
import type { PopupOptions, GeoJSONSourceRaw } from 'mapbox-gl'

type Props = {
  mapMaterials?: TMapMaterial
  sourceOptions?: Omit<GeoJSONSourceRaw, 'type' | 'data' | 'cluster'>
  popupOptions?: Omit<PopupOptions, 'anchor' | 'closeButton'>
}

export const MapWithClustersView = ({
  mapMaterials = {},
  sourceOptions,
  popupOptions,
}: Props) => {
  const information = useMemo(
    () =>
      Object.entries(mapMaterials).map(([type, events]) => ({
        sourceID: type,
        type: type as TEventType,
        features: events.map(createGeoJSONObject),
      })),
    [mapMaterials]
  )

  const handleInitialize = useCallback(
    event => {
      const map = event.target

      const popup = new Popup({
        anchor: 'bottom',
        closeButton: false,
        focusAfterOpen: false,
        offset: 25,
        ...popupOptions,
      })
      addPopupListeners(popup, map)

      information.map(({ sourceID, features, type }) => {
        /**
         * adds a clustered GeoJSON source
         */
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
        /**
         * layers for rendering clustered and unclustered points
         */
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

        addLayerListenersAssociatedWithPopup(
          sourceID,
          layerIDs,
          type,
          popup,
          map
        )

        /**
         * after the GeoJSON data is loaded, updates markers on the screen on every frame
         */
        const updateMarkers = getUpdateMarkers()
        map.on('render', () => {
          if (map.isSourceLoaded(sourceID)) {
            updateMarkers(sourceID, type, popup, map)
          }
        })
      })
    },
    [information]
  )

  return <MapView onInitialize={handleInitialize} />
}
