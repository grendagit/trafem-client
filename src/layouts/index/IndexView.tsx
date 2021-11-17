import React, { PropsWithChildren } from 'react'

import { Header } from '../../components/header'

type Props = {}

export const IndexView = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
