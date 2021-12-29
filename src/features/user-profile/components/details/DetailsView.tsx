import React from 'react'

import { Container } from '../container'
import { OutlinedPrimaryInput } from '../../../../components/input'
import { CustomButton } from '../../../../components/button'
import { Event } from '../event'
import type { TEvent } from '../../../../types/event.type'
import type { Generic } from '../../../../types/generic.type'
import {
  outlinedPrimaryInputStyle,
  submitButtonBoxStyle,
  submitButtonStyle,
  fixedSizeListBoxStyle,
} from './details.styles'

import { Grid, Box, Stack } from '@mui/material'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

type Props = {
  userAttributes: Generic
  userEvents: TEvent[]
}

export const DetailsView = ({ userAttributes, userEvents }: Props) => {
  const yourInformationFields = [
    { label: 'Imię', defaultValue: userAttributes.given_name },
    { label: 'Nazwisko', defaultValue: userAttributes.family_name },
  ]
  const yourInformationInputs = yourInformationFields.map(
    ({ label, defaultValue }) => (
      <OutlinedPrimaryInput
        inputLabel={label}
        placeholder={label}
        defaultValue={defaultValue}
        fullWidth
        sx={outlinedPrimaryInputStyle}
        key={label}
      />
    )
  )

  return (
    <Grid
      component={Stack}
      spacing={3}
      paddingY={2}
      paddingX={3}
      container
      item
      xs={12}
    >
      <Grid container item xs={6}>
        <Container title="Twoje informacje">
          <form>
            <Stack
              direction="column"
              justifyContent="start"
              alignItems="start"
              spacing={1}
            >
              {yourInformationInputs}
            </Stack>

            <Box sx={submitButtonBoxStyle}>
              <CustomButton type="submit" sx={submitButtonStyle}>
                Aktualizuj informacje
              </CustomButton>
            </Box>
          </form>
        </Container>
      </Grid>
      <Grid container item xs={6}>
        <Container title="Twoje wydarzenia">
          <Box sx={fixedSizeListBoxStyle}>
            <AutoSizer>
              {({ height, width }) => (
                <FixedSizeList
                  itemData={userEvents}
                  itemCount={userEvents.length}
                  itemSize={125}
                  overscanCount={5}
                  height={height}
                  width={width}
                  className="scrollbar"
                >
                  {Event}
                </FixedSizeList>
              )}
            </AutoSizer>
          </Box>
        </Container>
      </Grid>
    </Grid>
  )
}
