import tw from 'twin.macro'

export const inputLabelStyle = {
  ...tw`text-gray-800 text-sm font-light`,
}
export const inputStyle = {
  ...tw`rounded-full px-3 py-1.5 bg-white`,
  input: {
    ...tw`text-gray-800`,
    '&, &::placeholder': {
      ...tw`text-sm font-light`,
    },
    '&::placeholder': {
      ...tw`text-gray-400`,
    },
  },
}
