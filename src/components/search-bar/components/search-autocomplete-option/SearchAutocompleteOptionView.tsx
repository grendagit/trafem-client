import React from 'react'

import { Indentifier } from '../indentifier'
import { Keys, Option } from '../../../option'
import { stackStyle } from './search-autocomplete-option.styles'

import { Box, BoxProps, Stack } from '@mui/material'

type Props = {
  label: string
  ID: string
  type: Keys
  liProps: React.HTMLAttributes<HTMLLIElement>
  boxProps?: BoxProps
}

export const SearchAutocompleteOptionView = ({
  label,
  ID,
  type,
  liProps,
  boxProps,
}: Props) => {
  return (
    <Box component="li" {...liProps} {...boxProps}>
      <Option type={type} />
      <Stack
        spacing={0}
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={stackStyle}
      >
        <Box component="span">{label}</Box>
        <Indentifier identifier={ID} />
      </Stack>
    </Box>
  )
}
