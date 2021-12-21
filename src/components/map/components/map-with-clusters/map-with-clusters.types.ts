import { Popup } from 'mapbox-gl'
import type { MapboxGeoJSONFeature } from 'mapbox-gl'
import type { Feature, Point, GeoJsonProperties, Geometry } from 'geojson'
import type { TEvent, TGroupedEvents } from '../../../../types/event.type'

export type TMapMarker = TEvent
export type TMapMaterial = TGroupedEvents

export type FeatureNonNullableGeoJsonProperties<
  T extends Geometry | null = Point
> = Feature<T, NonNullable<GeoJsonProperties>>
export type MapboxGeoJSONFeaturePointNonNullableGeoJsonProperties<
  T extends Geometry = Point
> = MapboxGeoJSONFeature & FeatureNonNullableGeoJsonProperties<T>
export type PopupWithAssociatedID = Popup & { associatedID?: string }
