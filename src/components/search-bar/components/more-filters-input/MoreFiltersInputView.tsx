import React, { useState, ComponentProps } from 'react'

import { CustomButton, OutlinedPrimaryButton } from '../../../button'
import { CustomPopover } from '../../../popover'
import { MoreFiltersSlider } from '../more-filters-slider'
import { NumberOf } from '../../../number-of'
import {
  buttonStyle,
  buttonEndIconStyle,
  popoverCustomButtonStyle,
  popoverPaperStyle,
} from './more-filters-input.styles'

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
          <SvgIcon sx={buttonEndIconStyle}>
            <path d="M 3 3 L 3 5 L 4 5 L 9 13 L 9 21 L 15 21 L 15 13 L 20 5 L 21 5 L 21 3 L 20 3 L 4 3 L 3 3 z M 6.359375 5 L 17.642578 5 L 13 12.425781 L 13 19 L 11 19 L 11 12.425781 L 6.359375 5 z" />
          </SvgIcon>
        }
        onClick={handleExpandMoreButtonClick}
        fullWidth
        sx={buttonStyle}
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
