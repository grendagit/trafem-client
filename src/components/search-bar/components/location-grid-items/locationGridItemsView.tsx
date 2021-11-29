import React from 'react'

import { OutlinedPrimaryButton } from '../../../button'
import { OnClick } from '../location-input'

import { Grid } from '@mui/material'
import * as R from 'ramda'

type Props = {
  names: string[]
  onClick?: OnClick
}

export const LocationGridItemsView = ({ names, onClick }: Props) => {
  const gridItems = names.map(name => {
    const handleClick = onClick && R.curry(onClick)(name)

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
