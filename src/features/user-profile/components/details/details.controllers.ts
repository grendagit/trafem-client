import * as detailsService from './details.services'
import type { TUserAttributes } from './details.types'

export function manageGetUserEvents(userId: number) {
  return detailsService.getUserEvents(userId)
}

export async function updateUserInformation(
  user: any,
  userAttributes: TUserAttributes
) {
  try {
    await detailsService.updateUserInformation(user, userAttributes)
  } catch (error) {
    /**
     * TODO: alarm
     */
    console.log(`Error updating user information. Reason: ${error}`)
  }
}
