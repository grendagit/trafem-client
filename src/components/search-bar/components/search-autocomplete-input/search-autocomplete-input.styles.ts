import tw from 'twin.macro'

export const inputStyle = {
  ...tw`rounded-3xl pl-3.5 py-1`,
  input: {
    ...tw`ml-px`,
  },
}
export const inputStartAdornmentStyle = {
  '&, &:disabled': {
    ...tw`text-crayola`,
  },
}
export const inputBoxStyle = {
  ...tw`h-7.5 w-0`,
}
