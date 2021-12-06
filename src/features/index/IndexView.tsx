import React from 'react'

import { IndexLayout } from '../../layouts/index'
import { SEO } from '../../components/SEO'
import { MapWithClusters } from '../../components/map'
import { Listing } from '../../components/listing'

import { Grid, Box } from '@mui/material'

export const IndexView = () => {
  return (
    <Box id="root">
      <IndexLayout>
        <SEO title="Trafem" description="" />

        <Grid container>
          <Grid item xs={6}>
            <Listing />
          </Grid>
          <Grid item xs={6}>
            <MapWithClusters />
          </Grid>
        </Grid>
      </IndexLayout>
    </Box>
  )
}
