import React, { useState } from 'react'
import type { ComponentProps } from 'react'

import { EnhancedView } from './EnhancedView'

type ViewProps = ComponentProps<typeof EnhancedView>
type Props = Omit<ViewProps, 'value' | 'onChange'>

export const EnhancedContainer = ({ min = 0, max = 100, ...rest }: Props) => {
  const [value, setValue] = useState<number[]>([min, max])

  const handleChange: NonNullable<ViewProps['onChange']> = (_, newValue) =>
    setValue(newValue as number[])

  return (
    <EnhancedView
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      {...rest}
    />
  )
}
