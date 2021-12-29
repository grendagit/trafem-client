import { USER_MANAGEMENT_ENDPOINT } from '../../../../constants/endpoints.constant'
import { get } from '../../../../helpers/api'
import type { TEvent } from '../../../../types/event.type'

export async function getUserEvents(userId: number) {
  try {
    const userEvents = get({
      baseURL: USER_MANAGEMENT_ENDPOINT,
      url: `/users/${userId}/events`,
    })
    return (await userEvents) as TEvent[]
  } catch (error) {
    /**
     * TODO: improve handling
     */
    console.log(`Failed to get user events. Reason ${error}`)
  }

  return []
}
