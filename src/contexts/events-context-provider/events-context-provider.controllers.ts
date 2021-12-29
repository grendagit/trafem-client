import * as eventsContextProviderService from './events-context-provider.services'

export async function manageGetEvents() {
  const [orderedEvents, groupedEvents] = await Promise.all([
    eventsContextProviderService.getOrderedEvents(),
    eventsContextProviderService.getGroupedEvents(),
  ])
  return { orderedEvents, groupedEvents }
}
