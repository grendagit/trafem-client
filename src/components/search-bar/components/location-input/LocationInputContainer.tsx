import React, { useState, ComponentProps } from 'react'

import { LocationInputView } from './LocationInputView'

type ViewProps = ComponentProps<typeof LocationInputView>
type Props = Omit<ViewProps, 'value' | 'onClick'>

export const LocationInputContainer = (props: Props) => {
  const [value, setValue] = useState<string | null>(null)

  const handleClick: NonNullable<ViewProps['onClick']> = (location, _) =>
    setValue(location)

  return <LocationInputView value={value} onClick={handleClick} {...props} />
}
