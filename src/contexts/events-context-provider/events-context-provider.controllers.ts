import * as eventsContextProviderService from './events-context-provider.services'

export async function manageGetEvents() {
  return await eventsContextProviderService.getEvents()
}
