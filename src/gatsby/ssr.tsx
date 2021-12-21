import React from 'react'
import { GatsbyBrowser } from 'gatsby'

import { EventsContextProvider } from '../contexts/events-context-provider/EventsContextProvider'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props: { location },
}) => {
  if (['/'].includes(location.pathname)) {
    return <EventsContextProvider>{element}</EventsContextProvider>
  }
  return element
}
