import * as eventsContextProviderDAL from './events-context-provider.dal'

export function getOrderedEvents() {
  return eventsContextProviderDAL.getOrderedEvents()
}

export function getGroupedEvents() {
  return eventsContextProviderDAL.getGroupedEvents()
}
