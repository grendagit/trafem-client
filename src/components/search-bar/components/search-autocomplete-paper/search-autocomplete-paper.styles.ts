import tw from 'twin.macro'

export const paperStyle = {
  ...tw`rounded-b-3xl`,
  '& .MuiAutocomplete-listbox': {
    ...tw`text-gray-800 text-sm`,
    '&::-webkit-scrollbar': {
      ...tw`w-2`,
    },
    '&::-webkit-scrollbar-thumb': {
      ...tw`h-12 rounded-full bg-gray-200`,
    },
    '&::-webkit-scrollbar-track': {
      ...tw`bg-transparent`,
    },
  },
}
