import tw from 'twin.macro'

const commonStyle = {
  ...tw`flex justify-start items-center px-0 font-medium`,
}

export const buttonStyle = {
  ...tw`flex justify-between items-center relative`,
}
export const popoverPaperStyle = {
  ...tw`w-112`,
}
export const buttonEndIconStyle = {
  ...tw`text-crayola`,
}
export const popoverCustomButtonStyle = {
  ...tw`cursor-default`,
  ...commonStyle,
}
