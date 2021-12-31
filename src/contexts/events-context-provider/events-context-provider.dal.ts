import { get } from '../../helpers/api'
import { EVENT_MANAGEMENT_ENDPOINT } from '../../constants/endpoints.constant'
import type { TEvent, TGroupedEvents } from '../../types/event.type'

export async function getOrderedEvents() {
  try {
    const orderedEvents = get({
      baseURL: EVENT_MANAGEMENT_ENDPOINT,
      url: '/events',
      params: { 'order-by': 'created-at' },
    })
    return (await orderedEvents) as TEvent[]
  } catch (error) {
    throw new Error(`Failed to get ordered events. Reason ${error}`)
  }
}

export async function getGroupedEvents() {
  try {
    const groupedEvents = get({
      baseURL: EVENT_MANAGEMENT_ENDPOINT,
      url: '/events',
      params: { 'group-by': 'event-type' },
    })
    return (await groupedEvents) as TGroupedEvents
  } catch (error) {
    throw new Error(`Failed to get grouped events. Reason ${error}`)
  }
}
