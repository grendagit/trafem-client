import React from 'react'

import { SearchAutocomplete } from './components/search-autocomplete'
import { LocationInput } from './components/location-input'
import { OptionChoiceInput } from '../option'
import { MoreFiltersInput } from './components/more-filters-input'
import type { TSearchAutocompleteDropdownItem } from './components/search-autocomplete'
import type { TLocalInputRegion } from './components/location-input'
import type { TOptionChoiceInputMaterial } from '../option'
import {
  searchAutocompleteBoxStyle,
  locationInputBoxStyle,
  optionInputBoxStyle,
  moreFiltersInputBoxStyle,
} from './search-bar.styles'

import { Box, Stack } from '@mui/material'

const searchAutocompleteDropdownItems = [
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
] as TSearchAutocompleteDropdownItem[]
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
] as TLocalInputRegion[]
const optionChoiceInputMaterials = [
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
] as TOptionChoiceInputMaterial[]

export const SearchBarView = () => {
  const getSearchAutomcompleteDropdownItemLabel = ({
    label,
  }: TSearchAutocompleteDropdownItem) => label

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
          dropdownItems={searchAutocompleteDropdownItems}
          getItemLabel={getSearchAutomcompleteDropdownItemLabel}
        />
      </Box>
      <Box sx={locationInputBoxStyle}>
        <LocationInput regions={localInputRegions} />
      </Box>
      <Box sx={optionInputBoxStyle}>
        <OptionChoiceInput materials={optionChoiceInputMaterials} />
      </Box>
      <Box sx={moreFiltersInputBoxStyle}>
        <MoreFiltersInput sliderProps={{ max: 100000, step: 1000 }} />
      </Box>
    </Stack>
  )
}
