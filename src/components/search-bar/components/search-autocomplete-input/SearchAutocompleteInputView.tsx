import React, { forwardRef } from 'react'
import type { ComponentProps } from 'react'

import { FilledPrimaryInput } from '../../../input'
import {
  inputStyle,
  inputStartAdornmentStyle,
  inputBoxStyle,
} from './search-autocomplete-input.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'
// Icons
import Search from '../../../../assets/svg/icons/search.inline.svg'

import { IconButton, InputAdornment, SvgIcon, Box } from '@mui/material'

type Props = ComponentProps<typeof FilledPrimaryInput>

export const SearchAutocompleteInputView = forwardRef(
  ({ startAdornment, sx, ...rest }: Props, ref) => {
    return (
      <FilledPrimaryInput
        ref={ref}
        placeholder="Szukaj"
        startAdornment={
          <>
            <InputAdornment position="start">
              <IconButton disabled edge="start" sx={inputStartAdornmentStyle}>
                <SvgIcon component={Search} />
              </IconButton>
            </InputAdornment>
            <Box component="span" sx={inputBoxStyle}></Box>
            {startAdornment}
          </>
        }
        fullWidth
        sx={prepareStyles(inputStyle, sx)}
        {...rest}
      />
    )
  }
)
