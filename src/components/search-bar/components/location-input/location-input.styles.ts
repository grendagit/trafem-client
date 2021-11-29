import tw from 'twin.macro'

const commonStyle = {
  ...tw`flex justify-start items-center px-0 font-medium`,
}

export const popoverCustomButtonStyle = {
  ...tw`cursor-default`,
  ...commonStyle,
}
export const popoverExpandMoreButtonStyle = {
  ...commonStyle,
}
export const popoverExpandMoreButtonEndIconStyle = {
  ...tw`text-current`,
}
