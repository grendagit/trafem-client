import React, { useState } from 'react'
import type { ComponentProps } from 'react'

import { OptionChoiceInputView } from './OptionChoiceInputView'
import type { TMaterial } from './option-choice-input.types'

type ViewProps = ComponentProps<typeof OptionChoiceInputView>
type Props = { setParentValue?: any } & Omit<ViewProps, 'value' | 'onClick'>

export const OptionChoiceInputContainer = ({
  setParentValue,
  ...rest
}: Props) => {
  const [value, setValue] = useState<TMaterial['type'] | null>(null)

  const handleOptionClick: NonNullable<ViewProps['onOptionClick']> = (
    type,
    _
  ) => {
    const newValue = type === 'all' ? null : type
    setValue(newValue)

    setParentValue?.(newValue)
  }

  return (
    <OptionChoiceInputView
      value={value}
      onOptionClick={handleOptionClick}
      {...rest}
    />
  )
}
