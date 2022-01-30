// Styles begin
import '../styles/global.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// Styles end

import React from 'react'
import { GatsbyBrowser } from 'gatsby'

import { CommonLayout } from '../layouts/common'
import { AuthContextProvider, EventsContextProvider } from '../contexts'

import Amplify from 'aws-amplify'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props: { location },
}) => {
  let component = element
  if (['/', '/event-details'].includes(location.pathname)) {
    component = <EventsContextProvider>{component}</EventsContextProvider>
  }
  return <CommonLayout>{component}</CommonLayout>
}

Amplify.configure({
  Auth: {
    region: process.env.GATSBY_AWS_COGNITO_UP_REGION,
    userPoolId: process.env.GATSBY_AWS_COGNITO_UP_ID,
    userPoolWebClientId: process.env.GATSBY_AWS_COGNITO_UP_APP_CLIENT_ID,
    authenticationFlowType: 'CUSTOM_AUTH',
    cookieStorage: {
      domain: 'localhost',
      expires: 30,
      secure: false,
    },
  },
})

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  return <AuthContextProvider>{element}</AuthContextProvider>
}
