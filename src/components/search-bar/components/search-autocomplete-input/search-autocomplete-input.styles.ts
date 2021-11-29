import tw from 'twin.macro'

export const inputStyle = {
  ...tw`rounded-3xl !px-3 py-0.5`,
  input: {
    ...tw`!min-w-16 pl-1`,
  },
}
export const startAdornmentStyle = {
  '&, &:disabled': {
    ...tw`text-crayola`,
  },
}
