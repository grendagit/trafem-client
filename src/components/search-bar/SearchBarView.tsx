import React from 'react'

import { Item, SearchAutocomplete } from './components/search-autocomplete'
import { LocationInput } from './components/location-input'
import { Type, OptionInput } from './components/option-input'
import {
  boxStyle,
  optionInputBoxStyle,
  searchAutocompleteBoxStyle,
  stackStyle,
} from './search-bar.styles'

import { Box, Stack } from '@mui/material'

import { MoreFiltersInput } from './components/more-filters-input'

const searchAutocompleteItems: Item[] = [
  {
    label: 'Party',
    ID: 'TYPE',
    type: 'trip',
  },
  {
    label: 'Trip',
    ID: 'TYPE',
    type: 'party',
  },
]
const voivodeships = [
  {
    name: 'dolnośląskie',
    cities: ['Wrocław'],
  },
  {
    name: 'kujawsko-pomorskie',
    cities: ['Bydgoszcz', 'Toruń'],
  },
  {
    name: 'lubelskie',
    cities: ['Lublin'],
  },
  {
    name: 'lubuskie',
    cities: ['Gorzów Wielkopolski', 'Zielona Góra'],
  },
  {
    name: 'łódzkie',
    cities: ['Łódź'],
  },
  {
    name: 'małopolskie',
    cities: ['Kraków'],
  },
  {
    name: 'mazowieckie',
    cities: ['Warszawa'],
  },
  {
    name: 'opolskie',
    cities: ['Opole'],
  },
  {
    name: 'podkarpackie',
    cities: ['Rzeszów'],
  },
  {
    name: 'podlaskie',
    cities: ['Białystok'],
  },
  {
    name: 'pomorskie',
    cities: ['Gdańsk'],
  },
  {
    name: 'śląskie',
    cities: ['Katowice'],
  },
  {
    name: 'świętokrzyskie',
    cities: ['Kielce'],
  },
  {
    name: 'warmińsko-mazurskie',
    cities: ['Olsztyn'],
  },
  {
    name: 'wielkopolskie',
    cities: ['Poznań'],
  },
  {
    name: 'zachodniopomorskie',
    cities: ['Szczecin'],
  },
]
const options: Type[] = [
  {
    type: 'all',
  },
  {
    type: 'trip',
  },
  {
    type: 'party',
  },
]

export const SearchBarView = () => {
  const getSearchAutomcompleteItemLabel = ({ label }: Item) => label

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      sx={stackStyle}
    >
      <Box sx={searchAutocompleteBoxStyle}>
        <SearchAutocomplete
          items={searchAutocompleteItems}
          getItemLabel={getSearchAutomcompleteItemLabel}
        />
      </Box>
      <Box sx={boxStyle}>
        <LocationInput regions={voivodeships} />
      </Box>
      <Box sx={optionInputBoxStyle}>
        <OptionInput types={options} />
      </Box>
      <Box sx={boxStyle}>
        <MoreFiltersInput sliderProps={{ max: 100000, step: 1000 }} />
      </Box>
    </Stack>
  )
}
