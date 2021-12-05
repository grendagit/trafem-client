import tw from 'twin.macro'

const commonStyle = {
  ...tw`min-w-48`,
}

export const stackStyle = {
  ...tw`px-6 py-4`,
}
export const boxStyle = {
  ...commonStyle,
}
export const optionInputBoxStyle = {
  ...tw`flex flex-1`,
}
export const searchAutocompleteBoxStyle = {
  ...tw`max-w-1/2`,
  ...commonStyle,
}
