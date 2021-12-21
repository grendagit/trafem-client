import React, { useState, useEffect, useContext } from 'react'
import type { PropsWithChildren } from 'react'

import { manageGetEvents } from './events-context-provider.controllers'
import type { TGetEventsReturn } from '../../types/event.type'
import type { TContextValue } from './events-context-provider.types'

/**
 * TODO: undefined insted of that object
 */
export const defaultEvents = { latestEvents: [], groupedEvents: {} }

const EventsContext = React.createContext<TContextValue>({
  events: defaultEvents,
  areEventsLoading: true,
})

type Props = {}

export const EventsContextProvider = ({
  children,
}: PropsWithChildren<Props>) => {
  const [events, setEvents] = useState<TGetEventsReturn>(defaultEvents)
  const [areEventsLoading, setAreEventsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function callController() {
      const events = await manageGetEvents()
      setEvents(events)
      setAreEventsLoading(false)
    }
    callController()
  }, [])

  return (
    <EventsContext.Provider value={{ events, areEventsLoading }}>
      {children}
    </EventsContext.Provider>
  )
}

export const useEventsContext = () => {
  return useContext(EventsContext)
}
