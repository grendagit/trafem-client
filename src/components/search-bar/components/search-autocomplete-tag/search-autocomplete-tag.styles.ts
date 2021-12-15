import tw from 'twin.macro'

export const chipStyle = {
  ...tw`px-2 border border-gray-200 bg-white text-gray-800 text-xs font-medium`,
  '& .MuiChip-icon': {
    ...tw`m-0`,
  },
  '& .MuiChip-label': {
    ...tw`px-1 ml-1`,
  },
  '& .MuiChip-deleteIcon': {
    ...tw`p-1 m-0 ml-1 text-gray-400 hover:text-gray-400`,
  },
}
