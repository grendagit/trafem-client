import React from 'react'

import { paperStyle } from './popover.style'
import { prepareStyles } from '../../helpers/prepare-styles.helper'

import { Popover } from '@mui/material'
import type { PopoverProps } from '@mui/material'

type Props = PopoverProps

export const PopoverView = ({
  PaperProps: { sx: paperSx, ...paperRest } = {},
  sx,
  ...rest
}: Props) => {
  return (
    <Popover
      transitionDuration={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      PaperProps={{
        elevation: 2,
        sx: prepareStyles(paperStyle, paperSx),
        ...paperRest,
      }}
      sx={prepareStyles(undefined, sx)}
      {...rest}
    />
  )
}
