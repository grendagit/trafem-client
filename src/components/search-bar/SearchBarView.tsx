import React from 'react'

import { Item, SearchAutocomplete } from './components/search-autocomplete'
import { LocationInput } from './components/location-input'
import { OptionInput } from './components/option-input'
import { MoreFiltersInput } from './components/more-filters-input'
import type { TMaterial as TOptionInputMaterial } from './components/option-input'
import {
  searchAutocompleteBoxStyle,
  locationInputBoxStyle,
  optionInputBoxStyle,
  moreFiltersInputBoxStyle,
} from './search-bar.styles'

import { Box, Stack } from '@mui/material'

const searchAutocompleteItems: Item[] = [
  {
    label: 'Impreza',
    ID: 'TYP',
    type: 'trip',
  },
  {
    label: 'Wycieczka',
    ID: 'TYP',
    type: 'party',
  },
]
const localInputRegions = [
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
const optionInputMaterials: TOptionInputMaterial[] = [
  {
    type: 'all',
    label: 'Wszystko',
  },
  {
    type: 'trip',
    label: 'Wycieczka',
  },
  {
    type: 'party',
    label: 'Impreza',
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
      padding={2}
    >
      <Box sx={searchAutocompleteBoxStyle}>
        <SearchAutocomplete
          items={searchAutocompleteItems}
          getItemLabel={getSearchAutomcompleteItemLabel}
        />
      </Box>
      <Box sx={locationInputBoxStyle}>
        <LocationInput regions={localInputRegions} />
      </Box>
      <Box sx={optionInputBoxStyle}>
        <OptionInput materials={optionInputMaterials} />
      </Box>
      <Box sx={moreFiltersInputBoxStyle}>
        <MoreFiltersInput sliderProps={{ max: 100000, step: 1000 }} />
      </Box>
    </Stack>
  )
}
