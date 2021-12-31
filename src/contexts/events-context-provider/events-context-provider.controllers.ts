import * as eventsContextProviderService from './events-context-provider.services'

export async function manageGetEvents() {
  try {
    const [orderedEvents, groupedEvents] = await Promise.all([
      eventsContextProviderService.getOrderedEvents(),
      eventsContextProviderService.getGroupedEvents(),
    ])
    return { orderedEvents, groupedEvents }
  } catch (error) {
    /**
     * TODO: alarm
     */
    console.log(`Error getting events. Reason: ${error}`)
  }
}
