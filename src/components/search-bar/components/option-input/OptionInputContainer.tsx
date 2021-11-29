import React, { useState, ComponentProps } from 'react'

import { OptionInputView } from './OptionInputView'
import { Type } from './option-input.types'

type ViewProps = ComponentProps<typeof OptionInputView>
type Props = Omit<ViewProps, 'value' | 'onClick'>

export const OptionInputContainer = (props: Props) => {
  const [value, setValue] = useState<Type['type'] | null>(null)

  const handleClick: Exclude<ViewProps['onClick'], undefined> = (type, _) => {
    const newValue = type === 'all' ? null : type
    setValue(newValue)
  }

  return <OptionInputView value={value} onClick={handleClick} {...props} />
}
