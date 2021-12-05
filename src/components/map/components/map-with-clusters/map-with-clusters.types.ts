import { Keys } from '../../../option'

import { MapboxGeoJSONFeature, Popup } from 'mapbox-gl'
import { Feature, Point, GeoJsonProperties, Geometry } from 'geojson'

export type MapMarker = {
  ID: string | number
  longitude: number
  latitude: number
}
export type Material = {
  sourceID: string
  type: Keys
  mapMarkers: MapMarker[]
}
export type FeatureNonNullableGeoJsonProperties<
  T extends Geometry | null = Point
> = Feature<T, NonNullable<GeoJsonProperties>>
export type MapGeoJSONFeaturePointNonNullableGeoJsonProperties<
  T extends Geometry = Point
> = MapboxGeoJSONFeature & FeatureNonNullableGeoJsonProperties<T>
export type PopupWithAssociatedID = Popup & { associatedID?: string }
