import tw from 'twin.macro'

const commonStyle = {
  ...tw`text-sm font-light`,
}
const placeholderStyle = {
  ...tw`text-gray-400`,
}

export const inputStyle = {
  ...tw`rounded-full px-3 py-1.5 bg-white`,
  input: {
    ...tw`text-gray-800`,
    '&, &::placeholder': commonStyle,
    '&::placeholder': placeholderStyle,
  },
}
