import { getLinearGradient } from './option.helpers'

import tw from 'twin.macro'

export const outerBoxStyle = (from: string, to: string, alpha: number) => ({
  ...tw`h-9 w-9 flex justify-center items-center rounded-full`,
  '&:hover': {
    background: getLinearGradient(from, to, alpha),
  },
})
export const innerBoxStyle = (from: string, to: string) => ({
  ...tw`h-7 w-7 flex justify-center items-center rounded-full text-white `,
  background: getLinearGradient(from, to),
})
