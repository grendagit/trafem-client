import React from 'react'

import { OutlinedPrimaryButton } from '../../../button'
import type { TOnLocationGridItemClick } from '../location-input'

import { Grid } from '@mui/material'
import * as R from 'ramda'

type Props = {
  names: string[]
  onLocationGridItemClick?: TOnLocationGridItemClick
}

export const LocationGridItemsView = ({
  names,
  onLocationGridItemClick,
}: Props) => {
  const gridItems = names.map(name => {
    const handleClick =
      onLocationGridItemClick && R.curry(onLocationGridItemClick)(name)

    return (
      <Grid item key={name}>
        <OutlinedPrimaryButton onClick={handleClick}>
          {name}
        </OutlinedPrimaryButton>
      </Grid>
    )
  })

  return (
    <Grid container spacing={1}>
      {gridItems}
    </Grid>
  )
}
