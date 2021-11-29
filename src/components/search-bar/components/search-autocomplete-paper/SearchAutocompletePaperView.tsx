import React from 'react'

import { paperStyle } from './search-autocomplete-paper.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

import { Paper, PaperProps } from '@mui/material'

type Props = PaperProps

export const SearchAutocompletePaperView = ({ sx, ...rest }: Props) => {
  return <Paper elevation={3} sx={prepareStyles(paperStyle, sx)} {...rest} />
}
