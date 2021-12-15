import '../styles/global.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Amplify from 'aws-amplify'

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
