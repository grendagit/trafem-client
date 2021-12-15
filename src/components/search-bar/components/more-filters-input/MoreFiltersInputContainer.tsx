import React, { useState } from 'react'
import type { ComponentProps } from 'react'

import { MoreFiltersInputView } from './MoreFiltersInputView'
import { getNumberOfFilters } from './more-filters-input.helpers'

type ViewProps = ComponentProps<typeof MoreFiltersInputView>
type Props = Omit<ViewProps, 'numberOfFilters'> & {
  sliderProps?: Pick<
    NonNullable<ViewProps['sliderProps']>,
    'min' | 'max' | 'step'
  >
}

export const MoreFiltersInputContainer = ({ sliderProps, ...rest }: Props) => {
  const [value, setValue] = useState<number[] | null>(null)

  const handleChangeCommited: NonNullable<
    ViewProps['sliderProps']
  >['onChangeCommitted'] = (_, newValue) => setValue(newValue as number[])

  return (
    <MoreFiltersInputView
      numberOfFilters={getNumberOfFilters(value)}
      sliderProps={{ onChangeCommitted: handleChangeCommited, ...sliderProps }}
      {...rest}
    />
  )
}
