import React from 'react'
import type { PropsWithChildren } from 'react'

import { Header } from '../../components/header'
import { SearchBar } from '../../components/search-bar'

type Props = {}

export const IndexView = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Header />
      <SearchBar />
      <main>{children}</main>
    </>
  )
}
