import React from 'react'
import ReactDOM from 'react-dom'

import { MapMarker as CustomMarker } from '../map-marker'
import { MapPopupList as CustomPopupList } from '../map-popup-list'
import type { TType as TOptionType } from '../../../option'
import type {
  TMapMarker,
  FeatureNonNullableGeoJsonProperties,
  MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties,
  PopupWithAssociatedID,
} from './map-with-clusters.types'
import type { Generic } from '../../../../types/generic.type'

import { Map, GeoJSONSource, Marker } from 'mapbox-gl'
import type { LngLatLike } from 'mapbox-gl'

export function createGeoJSONObject({
  longitude,
  latitude,
  ...rest
}: TMapMarker): FeatureNonNullableGeoJsonProperties {
  return {
    type: 'Feature',
    properties: {
      cluster: false,
      ...rest,
    },
    geometry: {
      type: 'Point',
      coordinates: [longitude, latitude],
    },
  }
}

function getCoords({
  geometry: { coordinates },
}: MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties) {
  return coordinates as LngLatLike
}

function createID(ID: number, type: TOptionType, unclustered: boolean) {
  const prefix = unclustered ? 'unclustered' : 'clustered'
  return `${prefix}-${type}-${ID}`
}

function createHTMLPopupContentObject(
  features: MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties[]
) {
  const HTMLPopupContentObject = <CustomPopupList features={features} />

  const el = document.createElement('div')
  ReactDOM.render(HTMLPopupContentObject, el)

  return el
}

export function addLayerListenersAssociatedWithPopup(
  sourceID: string,
  layerIDs: {
    clustered: string
    unclustered: string
  },
  type: TOptionType,
  popup: PopupWithAssociatedID,
  map: Map
) {
  map.on('click', layerIDs.unclustered, event => {
    const map = event.target
    const feature = (
      event.features as MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties[]
    )[0]

    const coords = getCoords(feature)

    popup
      .setLngLat(coords)
      .setDOMContent(createHTMLPopupContentObject([feature]))
      .addTo(map)

    const { id: justID } = feature.properties
    popup.associatedID = createID(justID, type, true)
  })

  map.on('click', layerIDs.clustered, async event => {
    const map = event.target
    const feature = (
      event.features as MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties[]
    )[0]

    const { cluster_id: clusterID, point_count: pointCount } =
      feature.properties
    const source = map.getSource(sourceID) as GeoJSONSource
    const clusterLeaves = await new Promise<
      MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties[]
    >((resolve, reject) =>
      source.getClusterLeaves(clusterID, pointCount, 0, (error, features) => {
        if (error) {
          reject(error)
        }
        resolve(
          features as MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties[]
        )
      })
    )

    const coords = getCoords(feature)
    popup
      .setLngLat(coords)
      .setDOMContent(createHTMLPopupContentObject(clusterLeaves))
      .addTo(map)

    popup.associatedID = createID(clusterID, type, false)
  })
}

export function addPopupListeners(popup: PopupWithAssociatedID, map: Map) {
  popup.on('open', event => {
    const assertedEvent = event as Generic
    const popup = assertedEvent.target

    const point = map.project([popup._lngLat.lng, popup._lngLat.lat])
    point.y -= popup._container.clientHeight / 2
    map.panTo(map.unproject(point))
  })

  popup.on('remove', event => {
    const assertedEvent = event as Generic
    const popup = assertedEvent.target

    if (assertedEvent.associatedID === popup.associatedID) {
      popup.remove()
      popup.associatedID = null
    }
  })
}

function createHTMLMarkerObject(
  { point_count: pointCount }: Generic,
  type: TOptionType
) {
  const HTMLMarkerObject = <CustomMarker type={type} pointCount={pointCount} />

  const el = document.createElement('div')
  ReactDOM.render(HTMLMarkerObject, el)

  return el
}

export function getUpdateMarkers() {
  /**
   * objects for caching and keeping track of HTML marker objects
   */
  const markers: Generic = {}
  let markersOnScreen: Generic = {}

  function updateMarkers(
    sourceID: string,
    type: TOptionType,
    popup: PopupWithAssociatedID,
    map: Map
  ) {
    const newMarkers: Generic = {}

    const features = map.querySourceFeatures(
      sourceID
    ) as MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties[]

    /**
     * for every cluster on the screen, creates an HTML marker for it, and adds it to the map if it's not there already
     */
    for (const feature of features) {
      const {
        cluster_id: clusterID,
        id: justID,
        cluster: clustered,
      } = feature.properties
      const ID = clustered
        ? createID(clusterID, type, !clustered)
        : createID(justID, type, !clustered)

      let marker = markers[ID]
      if (!marker) {
        const coords = getCoords(feature)
        marker = markers[ID] = new Marker({
          element: createHTMLMarkerObject(feature.properties, type),
        }).setLngLat(coords)
      }

      newMarkers[ID] = marker

      if (!markersOnScreen[ID]) {
        marker.addTo(map)
      }
    }

    for (const ID in markersOnScreen) {
      if (!newMarkers[ID]) {
        if (popup.isOpen()) {
          popup.fire('remove', { associatedID: ID })
        }
        markersOnScreen[ID].remove()
      }
    }
    markersOnScreen = newMarkers
  }

  return updateMarkers
}
