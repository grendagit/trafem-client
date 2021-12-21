import React from 'react'

import { IndexLayout } from '../../layouts/index'
import { SEO } from '../../components/SEO'
import { MapWithClusters } from '../../components/map'
import { Listing } from '../../components/listing'
import { useEventsContext } from '../../contexts'

import { Grid, Box } from '@mui/material'

export const IndexView = () => {
  const { events, areEventsLoading } = useEventsContext()
  const { latestEvents, groupedEvents } = events

  return (
    <Box id="root">
      <IndexLayout>
        <SEO title="Trafem" description="" />

        <Grid container>
          <Grid item xs={7}>
            <Listing events={latestEvents} />
          </Grid>
          <Grid item xs={5}>
            <MapWithClusters
              mapMaterials={groupedEvents}
              areMapMaterialsLoading={areEventsLoading}
            />
          </Grid>
        </Grid>
      </IndexLayout>
    </Box>
  )
}
