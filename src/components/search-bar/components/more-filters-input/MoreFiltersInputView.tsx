import React, { useState } from 'react'
import type { ComponentProps } from 'react'

import { CustomButton, OutlinedPrimaryButton } from '../../../button'
import { CustomPopover } from '../../../popover'
import { MoreFiltersSlider } from '../more-filters-slider'
import { NumberOf } from '../../../number-of'
import {
  outlinedPrimaryButtonStyle,
  outlinedPrimaryButtonEndIconStyle,
  popoverCustomButtonStyle,
  popoverPaperStyle,
} from './more-filters-input.styles'
// Icons
import Filter from '../../../../assets/svg/icons/filter.inline.svg'

import { SvgIcon, Grid } from '@mui/material'

type Props = {
  numberOfFilters?: number
  sliderProps?: ComponentProps<typeof MoreFiltersSlider>
}

export const MoreFiltersInputView = ({
  numberOfFilters,
  sliderProps,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleExpandMoreButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => setAnchorEl(event.currentTarget)
  const handlePopoverClose = () => setAnchorEl(null)
  const popoverOpen = !!anchorEl

  return (
    <>
      <OutlinedPrimaryButton
        endIcon={
          <SvgIcon component={Filter} sx={outlinedPrimaryButtonEndIconStyle} />
        }
        onClick={handleExpandMoreButtonClick}
        fullWidth
        sx={outlinedPrimaryButtonStyle}
      >
        Więcej filtrów
        {!!numberOfFilters && <NumberOf number={numberOfFilters} />}
      </OutlinedPrimaryButton>

      <CustomPopover
        open={popoverOpen}
        anchorEl={anchorEl}
        PaperProps={{ sx: popoverPaperStyle }}
        onClose={handlePopoverClose}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CustomButton disableRipple sx={popoverCustomButtonStyle}>
              Koszt wydarzenia
            </CustomButton>
          </Grid>
          <Grid item xs={12}>
            <MoreFiltersSlider {...sliderProps} />
          </Grid>
        </Grid>
      </CustomPopover>
    </>
  )
}
