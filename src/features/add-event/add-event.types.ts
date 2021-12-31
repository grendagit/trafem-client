import type { TEventType } from '../../types/event.type'

export type TFormFields = {
  title: string
  description: string
  participationPriceMin: number | null
  participationPriceMax: number
  durationFrom: string | null
  durationTo: string
  eventType: TEventType
  lngLat: [number, number]
}
