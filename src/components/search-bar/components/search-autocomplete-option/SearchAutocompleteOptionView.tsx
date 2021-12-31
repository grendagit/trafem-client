import React from 'react'

import { Indentifier } from '../indentifier'
import { Option } from '../../../option'
import type { TOptionType } from '../../../option'

import { Box, Stack } from '@mui/material'
import type { BoxProps } from '@mui/material'

type Props = {
  label: string
  ID: string
  type: TOptionType
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
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0}
        marginLeft={0.5}
      >
        <Box component="span">{label}</Box>
        <Indentifier identifier={ID} />
      </Stack>
    </Box>
  )
}
