import React, { useState, ComponentProps } from 'react'
import { MoreFiltersSliderView } from './MoreFiltersSliderView'

type ViewProps = ComponentProps<typeof MoreFiltersSliderView>
type Props = Omit<ViewProps, 'value' | 'onChange'>

export const MoreFiltersSliderContainer = ({
  min = 0,
  max = 100,
  ...rest
}: Props) => {
  const [value, setValue] = useState<number[]>([min, max])

  const handleChange: Exclude<ViewProps['onChange'], undefined> = (
    _,
    newValue
  ) => setValue(newValue as number[])

  return (
    <MoreFiltersSliderView
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      {...rest}
    />
  )
}
