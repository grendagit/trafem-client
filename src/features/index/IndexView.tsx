import React from 'react'

import { useEventsContext } from '../../contexts'
import { SEO } from '../../components/SEO'
import { SearchBar } from '../../components/search-bar'
import { Listing } from '../../components/listing'
import { MapWithClusters } from '../../components/map'
import type { TGetEventsReturn } from '../../types/event.type'

import { Grid } from '@mui/material'

export const IndexView = () => {
  const { events } = useEventsContext()
  const { orderedEvents, groupedEvents } = events || ({} as TGetEventsReturn)

  return (
    <>
      <SEO title="Trafem" description="" />

      <SearchBar />

      <Grid container flex={1}>
        <Grid item xs={7}>
          <Listing events={orderedEvents} />
        </Grid>
        <Grid item xs={5}>
          <MapWithClusters materials={groupedEvents} />
        </Grid>
      </Grid>
    </>
  )
}
