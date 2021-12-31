import React, { useState } from 'react'

import { ExpandMoreButton } from '../../../button'
import { CustomPopover } from '../../../popover'
import type {
  TSortingTypes,
  TOnSortingTypeItemClick,
} from './sorting-input.types'
import {
  customPopoverStyle,
  customPopoverPaperStyle,
} from './sorting-input.styles'

import { List, ListItemButton } from '@mui/material'
import * as R from 'ramda'

type Props = {
  sortingTypes: TSortingTypes
  value?: string | null
  onSortingTypeItemClick?: TOnSortingTypeItemClick
}

export const SortingInputView = ({
  sortingTypes,
  value,
  onSortingTypeItemClick,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleExpandMoreButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => setAnchorEl(event.currentTarget)
  const handlePopoverClose = () => setAnchorEl(null)
  const popoverOpen = !!anchorEl

  const handleSortingTypeItemClick: TOnSortingTypeItemClick = (
    sortingType,
    event
  ) => {
    handlePopoverClose()
    onSortingTypeItemClick?.(sortingType, event)
  }

  const sortingTypeItems = sortingTypes.map(sortingType => {
    const handleClick =
      onSortingTypeItemClick && R.curry(handleSortingTypeItemClick)(sortingType)

    return (
      <ListItemButton onClick={handleClick} key={sortingType}>
        {sortingType}
      </ListItemButton>
    )
  })

  return (
    <>
      <ExpandMoreButton
        nature="outlined"
        expanded={popoverOpen}
        onClick={handleExpandMoreButtonClick}
        fullWidth
      >
        {value}
      </ExpandMoreButton>

      <CustomPopover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        PaperProps={{ sx: customPopoverPaperStyle }}
        sx={customPopoverStyle}
      >
        <List>{sortingTypeItems}</List>
      </CustomPopover>
    </>
  )
}
