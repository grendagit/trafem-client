import * as detailsDAL from './details.dal'
import { objectShallowCamelToSnakeKeys } from '../../../../helpers/camel-to-snake-case.helper'
import type { TUserAttributes } from './details.types'

import { Auth } from 'aws-amplify'

export function getUserEvents(userId: number) {
  return detailsDAL.getUserEvents(userId)
}

export function updateUserInformation(
  user: any,
  userAttributes: TUserAttributes
) {
  const snakeCaseUserAttributes = objectShallowCamelToSnakeKeys(userAttributes)

  return Auth.updateUserAttributes(user, snakeCaseUserAttributes)
}
