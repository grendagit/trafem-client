import React, { useState } from 'react'
import type { ComponentProps } from 'react'

import { SortingInputView } from './SortingInputView'

type ViewProps = ComponentProps<typeof SortingInputView>
type Props = Omit<ViewProps, 'value' | 'onClick'>

export const SortingInputContainer = (props: Props) => {
  const { sortingTypes } = props
  const [value, setValue] = useState<string>(sortingTypes[0])

  const handleClick: NonNullable<ViewProps['onClick']> = (sortingType, _) =>
    setValue(sortingType)

  return <SortingInputView value={value} onClick={handleClick} {...props} />
}
