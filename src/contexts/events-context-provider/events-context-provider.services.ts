import * as eventsContextProviderDAL from './events-context-provider.dal'

export function getEvents() {
  return eventsContextProviderDAL.getEvents()
}
