import React from 'react'

import { useEventsContext } from '../../contexts'
import { SEO } from '../../components/SEO'
import { SearchBar } from '../../components/search-bar'
import { MapWithClusters } from '../../components/map'
import type { TGetEventsReturn } from '../../types/event.type'

import { Grid, Paper, Stack, Box, Divider, SvgIcon } from '@mui/material'

import Donate from '../../assets/svg/icons/donate.inline.svg'
import Calendar from '../../assets/svg/icons/calendar.inline.svg'

import tw from 'twin.macro'

export const imageAsBackgroundStyle = {
  ...tw`h-full w-full absolute top-0 left-0 -z-10`,
}

export const EventDetailsView = () => {
  const { events } = useEventsContext()
  const { groupedEvents } = events || ({} as TGetEventsReturn)

  return (
    <>
      <SEO title="Trafem" description="" />

      <SearchBar />

      <Grid container flex={1}>
        <Grid item xs={7}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={4}
            paddingX={2}
          >
            <Box sx={{ ...tw`w-full relative` }}>
              <Paper
                elevation={2}
                sx={{
                  ...tw`h-64 w-full flex justify-center items-center relative rounded overflow-hidden bg-transparent text-sm font-light`,
                }}
              >
                <img
                  src="/backgrounds/Doubs.svg"
                  style={imageAsBackgroundStyle}
                />
                <Paper
                  elevation={0}
                  sx={{ ...tw`py-4 px-6 bg-white/10 text-white` }}
                >
                  Sylwester w Krakowie
                </Paper>
              </Paper>
              <Box
                sx={{
                  ...tw`w-full flex justify-around items-center absolute -bottom-4`,
                }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    ...tw`w-48 p-4 relative text-center text-xs text-crayola font-light`,
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      ...tw`absolute p-2 -top-7 left-1/2 -translate-x-1/2 rounded-full text-crayola`,
                    }}
                  >
                    <SvgIcon component={Donate} />
                  </Paper>
                  100 – 1000 PLN
                </Paper>
                <Paper
                  elevation={2}
                  sx={{
                    ...tw`w-48 p-4 relative text-center text-xs text-gray-400 font-light`,
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      ...tw`absolute -top-7 left-1/2 -translate-x-1/2 p-2 rounded-full text-gray-400`,
                    }}
                  >
                    <SvgIcon component={Calendar} />
                  </Paper>
                  30.12.2021 – 02.01.2022
                </Paper>
              </Box>
            </Box>

            <Paper
              elevation={2}
              sx={{ ...tw`rounded text-gray-800 text-xs font-light` }}
            >
              <Box component="h2" sx={{ ...tw`py-2 px-4 text-sm font-normal` }}>
                Opis
              </Box>
              <Divider sx={{ ...tw`border-gray-200` }} />
              <Box sx={{ ...tw`p-4` }}>
                Opis Rok 2022 czas zacząć! Z tej Okazji chciałbym zaprosić Was
                na fantastyczną zabawę, podczas której będziemy witać Nowy Rok.
                Nie może Cię zabraknąć!
              </Box>
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <MapWithClusters materials={groupedEvents} />
        </Grid>
      </Grid>
    </>
  )
}
