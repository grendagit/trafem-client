import React, { useState } from 'react'
import type { ComponentProps } from 'react'

import { OptionInputView } from './OptionInputView'
import type { TMaterial } from './option-input.types'

type ViewProps = ComponentProps<typeof OptionInputView>
type Props = Omit<ViewProps, 'value' | 'onClick'>

export const OptionInputContainer = (props: Props) => {
  const [value, setValue] = useState<TMaterial['type'] | null>(null)

  const handleClick: NonNullable<ViewProps['onClick']> = (type, _) => {
    const newValue = type === 'all' ? null : type
    setValue(newValue)
  }

  return <OptionInputView value={value} onClick={handleClick} {...props} />
}
