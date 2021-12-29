import React from 'react'
import { GatsbySSR } from 'gatsby'

import { CommonLayout } from '../layouts/common'
import { EventsContextProvider } from '../contexts/events-context-provider/EventsContextProvider'
import { AuthContextProvider } from '../contexts'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props: { location },
}) => {
  let component = element
  if (['/'].includes(location.pathname)) {
    component = <EventsContextProvider>{component}</EventsContextProvider>
  }
  return <CommonLayout>{component}</CommonLayout>
}

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
  return <AuthContextProvider>{element}</AuthContextProvider>
}
