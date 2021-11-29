import tw from 'twin.macro'

const iconStyle = {
  ...tw`m-0`,
}
const labelStyle = {
  ...tw`px-1 ml-1`,
}
const deleteIconStyle = {
  ...tw`p-1 m-0 ml-1 text-gray-400 hover:text-gray-400`,
}

export const chipStyle = {
  ...tw`px-2 border border-gray-200 bg-white text-xs text-gray-800 font-medium`,
  '& .MuiChip-icon': iconStyle,
  '& .MuiChip-label': labelStyle,
  '& .MuiChip-deleteIcon': deleteIconStyle,
}
