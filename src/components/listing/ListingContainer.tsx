import React from 'react'
import type { ComponentProps } from 'react'

import { ListingView } from './ListingView'

type Props = ComponentProps<typeof ListingView>

export const ListingContainer = (props: Props) => {
  return <ListingView {...props} />
}
