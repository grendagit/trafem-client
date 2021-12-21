import { get } from '../../helpers/api'
import { EVENT_MANAGEMENT_ENDPOINT } from '../../constants/endpoints.constant'
import { defaultEvents } from './EventsContextProvider'
import type { TGetEventsReturn } from '../../types/event.type'

export async function getEvents(): Promise<TGetEventsReturn> {
  try {
    const events = get({
      baseURL: EVENT_MANAGEMENT_ENDPOINT,
      url: '/events',
    })
    return (await events) as TGetEventsReturn
  } catch (error) {
    /**
     * TODO: improve handling
     */
    console.log(`Failed to get events. Reason ${error}`)
  }

  return defaultEvents
}
