import tw from 'twin.macro'

export const containerBoxStyle = {
  ...tw`pb-3 px-3`,
}
export const cardStyle = {
  ...tw`h-full w-full flex rounded`,
}
export const cardContentStyle = {
  ...tw`flex flex-col justify-start items-stretch flex-1`,
  '&, &:last-child': {
    ...tw`p-4`,
  },
}
export const cardContextBoxStyle = {
  ...tw`flex justify-between items-center`,
}
export const headerBoxStyle = {
  ...tw`text-base`,
}
export const titleStyle = {
  ...tw`font-normal`,
}
export const participationPriceStyle = {
  ...tw`text-crayola`,
}
export const dateStyle = {
  ...tw`text-gray-400`,
}
export const descriptionBoxStyle = {
  ...tw`mt-auto`,
}
export const descriptionStyle = {
  ...tw`line-clamp-2`,
}

export const listItemButtonStyle = {
  ...tw`h-full w-full flex flex-col justify-start items-stretch`,
}
export const simplifiedHeaderBoxStyle = {
  ...tw`text-sm`,
}
