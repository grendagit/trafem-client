import React from 'react'
import type { PropsWithChildren } from 'react'

import { Header } from '../../components/header'

type Props = {}

export const CommonView = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
