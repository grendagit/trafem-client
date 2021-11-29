import React, { useState, ComponentProps } from 'react'

import { SearchAutocompleteView } from './SearchAutocompleteView'

type ViewProps = ComponentProps<typeof SearchAutocompleteView>
type Props = Omit<ViewProps, 'onChange'>

export const SearchAutocompleteContainer = (props: Props) => {
  const [_, setValue] = useState<ViewProps['items'] | null>(null)

  const handleChange: Exclude<ViewProps['onChange'], undefined> = (
    _,
    newValue
  ) => setValue(newValue)

  return <SearchAutocompleteView onChange={handleChange} {...props} />
}
