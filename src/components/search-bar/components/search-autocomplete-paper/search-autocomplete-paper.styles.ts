import tw from 'twin.macro'

const listboxStyle = {
  ...tw`text-sm text-gray-800`,
  '&::-webkit-scrollbar': {
    ...tw`w-2`,
  },
  '&::-webkit-scrollbar-thumb': {
    ...tw`h-12 rounded-full bg-gray-200`,
  },
  '&::-webkit-scrollbar-track': {
    ...tw`bg-transparent`,
  },
}

export const paperStyle = {
  ...tw`rounded-b-3xl`,
  '& .MuiAutocomplete-listbox': listboxStyle,
}
