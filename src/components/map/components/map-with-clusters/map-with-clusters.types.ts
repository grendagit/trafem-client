import type { TType as TOptionType } from '../../../option'

import { Popup } from 'mapbox-gl'
import type { MapboxGeoJSONFeature } from 'mapbox-gl'
import type { Feature, Point, GeoJsonProperties, Geometry } from 'geojson'

export type TMapMarker = {
  ID: string | number
  longitude: number
  latitude: number
}
export type TMapMaterial = {
  sourceID: string
  type: TOptionType
  mapMarkers: TMapMarker[]
}

export type FeatureNonNullableGeoJsonProperties<
  T extends Geometry | null = Point
> = Feature<T, NonNullable<GeoJsonProperties>>
export type MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties<
  T extends Geometry = Point
> = MapboxGeoJSONFeature & FeatureNonNullableGeoJsonProperties<T>
export type PopupWithAssociatedID = Popup & { associatedID?: string }
