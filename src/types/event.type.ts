import type { TType as TOptionType } from '../components/option'

export type TEventType = Exclude<TOptionType, 'all'>
export type TEvent = {
  id: number
  end_user_id: number
  event_type: TEventType
  longitude: number
  latitude: number
  title: string
  description: string
  participation_price_min: number | null
  participation_price_max: number
  duration_from: string | null
  duration_to: string
}
export type TGroupedEvents = { [key in TEventType]?: TEvent[] }
export type TGetEventsReturn = {
  groupedEvents: TGroupedEvents
  latestEvents: TEvent[]
}
