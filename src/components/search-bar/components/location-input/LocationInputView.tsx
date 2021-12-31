import React, { useState } from 'react'

import { ExpandMoreButton, CustomButton } from '../../../button'
import { CustomPopover } from '../../../popover'
import { LocationGridItems } from '../location-grid-items'
import type { TOnLocationGridItemClick, TRegion } from './location-input.types'
import {
  popoverCustomButtonStyle,
  popoverExpandMoreButtonStyle,
  popoverExpandMoreButtonEndIconStyle,
} from './location-input.styles'

import { Grid, Collapse } from '@mui/material'

type Props = {
  regions: TRegion[]
  value?: string | null
  onLocationGridItemClick?: TOnLocationGridItemClick
}

export const LocationInputView = ({
  regions,
  value,
  onLocationGridItemClick,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [voivodeshipsExpanded, setVoivodeshipsExpanded] = useState(false)

  const handleExpandMoreButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => setAnchorEl(event.currentTarget)
  const handlePopoverClose = () => setAnchorEl(null)
  const popoverOpen = !!anchorEl

  const handleExpandMoreButtonClickVoivodeshipsExpanded = () =>
    setVoivodeshipsExpanded(!voivodeshipsExpanded)

  const handleLocationGridItemClick: TOnLocationGridItemClick = (
    location,
    event
  ) => {
    handlePopoverClose()
    onLocationGridItemClick?.(location, event)
  }

  const cities = regions.flatMap(({ cities }) => cities)
  const voivodeships = regions.map(({ name }) => name)

  return (
    <>
      <ExpandMoreButton
        nature="outlined"
        expanded={popoverOpen}
        onClick={handleExpandMoreButtonClick}
        fullWidth
      >
        {value || 'Lokalizacja'}
      </ExpandMoreButton>

      <CustomPopover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CustomButton disableRipple sx={popoverCustomButtonStyle}>
              Miasta
            </CustomButton>
          </Grid>
          <Grid item xs={12}>
            <LocationGridItems
              names={cities}
              onLocationGridItemClick={handleLocationGridItemClick}
            />
          </Grid>
          <Grid item xs={12}>
            <ExpandMoreButton
              nature="custom"
              expanded={voivodeshipsExpanded}
              disableRipple
              endIconProps={{ sx: popoverExpandMoreButtonEndIconStyle }}
              onClick={handleExpandMoreButtonClickVoivodeshipsExpanded}
              sx={popoverExpandMoreButtonStyle}
            >
              Województwa
            </ExpandMoreButton>
          </Grid>
          <Grid item xs={12}>
            <Collapse timeout={0} in={voivodeshipsExpanded}>
              <LocationGridItems
                names={voivodeships}
                onLocationGridItemClick={handleLocationGridItemClick}
              />
            </Collapse>
          </Grid>
        </Grid>
      </CustomPopover>
    </>
  )
}
