import tw from 'twin.macro'

const buttonCommonStyle = {
  ...tw`flex justify-start items-center px-0 font-normal`,
}

export const popoverCustomButtonStyle = {
  ...tw`cursor-default`,
  ...buttonCommonStyle,
}
export const popoverExpandMoreButtonStyle = {
  ...buttonCommonStyle,
}
export const popoverExpandMoreButtonEndIconStyle = {
  ...tw`text-current`,
}
