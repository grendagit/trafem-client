import React from 'react'

import { chipStyle } from './search-autocomplete-tag.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'
import Close from '../../../../assets/svg/icons/close.inline.svg'

import { Chip, IconButton, SvgIcon } from '@mui/material'
import type { ChipProps } from '@mui/material'

type Props = ChipProps

export const SearchAutocompleteTagView = ({ sx, ...rest }: Props) => {
  return (
    <Chip
      variant="outlined"
      deleteIcon={
        <IconButton size="small">
          <SvgIcon component={Close} fontSize="small" />
        </IconButton>
      }
      sx={prepareStyles(chipStyle, sx)}
      {...rest}
    />
  )
}
