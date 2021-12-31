import React, { useState, useEffect } from 'react'

import { DetailsView } from './DetailsView'
import { useAuthContext } from '../../../../contexts'
import { manageGetUserEvents } from './details.controllers'
import type { TEvent } from '../../../../types/event.type'

export const DetailsContainer = () => {
  const [userEvents, setUserEvents] = useState<TEvent[]>()
  const [areUserEventsLoading, setAreUserEventsLoading] =
    useState<boolean>(true)

  const { user } = useAuthContext()

  useEffect(() => {
    async function callController(userId: number) {
      const userEvents = await manageGetUserEvents(userId)
      setUserEvents(userEvents)
      setAreUserEventsLoading(false)
    }

    if (user) {
      const userId = user.attributes['custom:id']
      callController(userId)
    }
  }, [user])

  return (
    <DetailsView
      user={user}
      userEvents={areUserEventsLoading ? [] : userEvents!}
    />
  )
}
