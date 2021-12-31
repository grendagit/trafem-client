import tw from 'twin.macro'

export const boxStyle = {
  ...tw`w-full flex flex-col`,
}
export const inputLabelStyle = {
  ...tw`mb-1 text-gray-800 text-sm font-light`,
}
const inputChildStyle = {
  ...tw`text-gray-800`,
  '&, &::placeholder': {
    ...tw`text-sm font-light`,
  },
  '&::placeholder': {
    ...tw`text-gray-400`,
  },
}
export const inputStyle = {
  ...tw`rounded-full px-3 py-1.5 bg-white`,
  input: inputChildStyle,
  textarea: {
    ...inputChildStyle,
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
