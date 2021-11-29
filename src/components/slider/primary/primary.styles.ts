import { colors } from '../../../styles/common'
import { hexToRgb } from '../../../helpers/hex-to-rgb'

import tw from 'twin.macro'

const crayola = hexToRgb(colors.crayola)?.join(' ')
const alpha = 0.15

const thumbStyle = {
  '&:focus, &:hover, &.Mui-focusVisible': {
    boxShadow: `0px 0px 0px 8px rgb(${crayola} / ${alpha})`,
  },
  '&.Mui-active': {
    boxShadow: `0px 0px 0px 10px rgb(${crayola} / ${alpha})`,
  },
}

export const sliderStyle = {
  ...tw`text-crayola`,
  '& .MuiSlider-thumb': thumbStyle,
}
