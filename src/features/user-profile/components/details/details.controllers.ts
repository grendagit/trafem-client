import * as detailsService from './details.services'

export function manageGetUserEvents(userId: number) {
  return detailsService.getUserEvents(userId)
}
