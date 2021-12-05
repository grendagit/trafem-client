import React, { forwardRef, ComponentProps } from 'react'

import { FilledPrimaryInput } from '../../../input'
import {
  inputStyle,
  startAdornmentStyle,
} from './search-autocomplete-input.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'
import Search from '../../../../assets/svg/icons/search.inline.svg'

import { IconButton, SvgIcon } from '@mui/material'

type Props = ComponentProps<typeof FilledPrimaryInput>

export const SearchAutocompleteInputView = forwardRef(
  ({ startAdornment, sx, ...rest }: Props, ref) => {
    return (
      <FilledPrimaryInput
        ref={ref}
        placeholder="Szukaj"
        startAdornment={
          <>
            <IconButton disabled size="small" sx={startAdornmentStyle}>
              <SvgIcon component={Search} />
            </IconButton>
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
