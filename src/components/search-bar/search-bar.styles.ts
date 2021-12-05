import tw from 'twin.macro'

const commonStyle = {
  ...tw`min-w-48`,
}

export const stackStyle = {
  ...tw`p-6`,
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
