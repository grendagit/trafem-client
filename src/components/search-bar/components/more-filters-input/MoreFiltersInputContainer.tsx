import React, { useState, ComponentProps } from 'react'

import { MoreFiltersInputView } from './MoreFiltersInputView'
import { getNumberOfFilters } from './more-filters-input.helpers'

type ViewProps = ComponentProps<typeof MoreFiltersInputView>
type Props = Omit<ViewProps, 'numberOfFilters'> & {
  sliderProps?: Pick<
    Exclude<ViewProps['sliderProps'], undefined>,
    'min' | 'max' | 'step'
  >
}

export const MoreFiltersInputContainer = ({ sliderProps, ...rest }: Props) => {
  const [value, setValue] = useState<number[] | null>(null)

  const handleChangeCommited: Exclude<
    ViewProps['sliderProps'],
    undefined
  >['onChangeCommitted'] = (_, newValue) => setValue(newValue as number[])

  return (
    <MoreFiltersInputView
      numberOfFilters={getNumberOfFilters(value)}
      sliderProps={{ onChangeCommitted: handleChangeCommited, ...sliderProps }}
      {...rest}
    />
  )
}
