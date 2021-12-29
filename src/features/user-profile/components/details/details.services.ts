import * as detailsDAL from './details.dal'

export function getUserEvents(userId: number) {
  return detailsDAL.getUserEvents(userId)
}
