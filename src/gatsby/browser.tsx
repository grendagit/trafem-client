// Styles begin
import '../styles/global.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// Styles end

import React from 'react'
import { GatsbyBrowser } from 'gatsby'

import { EventsContextProvider } from '../contexts'

import Amplify from 'aws-amplify'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props: { location },
}) => {
  if (['/'].includes(location.pathname)) {
    return <EventsContextProvider>{element}</EventsContextProvider>
  }
  return element
}

Amplify.configure({
  Auth: {
    region: process.env.GATSBY_AMAZON_COGNITO_REGION,
    userPoolId: process.env.GATSBY_AMAZON_COGNITO_USER_POOL_ID,
    userPoolWebClientId:
      process.env.GATSBY_AMAZON_COGNITO_USER_POOL_WEB_CLIENT_ID,
    authenticationFlowType: 'CUSTOM_AUTH',
    cookieStorage: {
      domain: 'localhost',
      expires: 30,
      secure: false,
    },
  },
})
