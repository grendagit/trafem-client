import { LngLat } from 'mapbox-gl'

export function transformCenter(center: LngLat) {
  const { lng, lat } = center

  return [lng, lat].map((coord: number) => coord.toFixed(4)) as unknown as [
    number,
    number
  ]
}
