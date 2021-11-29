import React from 'react'

import { Indentifier } from '../indentifier'
import { SearchAutocompleteTag } from '../search-autocomplete-tag'
import { SearchAutocompletePaper } from '../search-autocomplete-paper'
import { SearchAutocompleteOption } from '../search-autocomplete-option'
import { SearchAutocompleteInput } from '../search-autocomplete-input'
import { Item } from './search-autocomplete.types'

import { Autocomplete } from '@mui/material'

type Props<T> = {
  items: T[]
  getItemLabel: (item: T) => string
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    newValue: T[]
  ) => void
}

export const SearchAutocompleteView = <T extends Item>({
  items,
  getItemLabel,
  onChange,
}: Props<T>) => {
  return (
    <Autocomplete
      options={items}
      getOptionLabel={getItemLabel}
      autoHighlight
      multiple
      PaperComponent={props => <SearchAutocompletePaper {...props} />}
      renderTags={(value, getTagProps) =>
        value.map(({ label, ID }, index) => (
          <SearchAutocompleteTag
            label={label}
            {...getTagProps({ index })}
            icon={<Indentifier identifier={ID} />}
            key={`${label}${ID}`}
          />
        ))
      }
      renderOption={(liProps, option) => (
        <SearchAutocompleteOption
          liProps={liProps}
          key={`${option.label}${option.ID}`}
          {...option}
        />
      )}
      renderInput={({
        InputProps: { ref, className, startAdornment },
        inputProps,
      }) => (
        <SearchAutocompleteInput
          ref={ref}
          className={className}
          inputProps={inputProps}
          startAdornment={startAdornment}
        />
      )}
      onChange={onChange}
    />
  )
}
