import React from 'react'

import { Keys } from './option.types'
import { outerBoxStyle, innerBoxStyle } from './option.styles'
import { prepareStyles } from '../../helpers/prepare-styles.helper'
import Confetti from '../../assets/svg/icons/confetti.inline.svg'
import Beach from '../../assets/svg/icons/beach.inline.svg'
import Literature from '../../assets/svg/icons/literature.inline.svg'

import { Box, BoxProps, SvgIcon, SvgIconProps } from '@mui/material'

const inactiveColors = {
  from: '142 158 171',
  to: '238 242 243',
  alpha: 0.2,
}

export const options = {
  party: {
    Icon: (props: SvgIconProps) => <SvgIcon component={Confetti} {...props} />,
    from: '102 125 182',
    to: '0 130 200',
    alpha: 0.2,
  },
  trip: {
    Icon: (props: SvgIconProps) => <SvgIcon component={Beach} {...props} />,
    from: '253 252 71',
    to: '36 254 65',
    alpha: 0.2,
  },

  all: {
    Icon: (props: SvgIconProps) => (
      <SvgIcon component={Literature} {...props} />
    ),
    from: '97 67 133',
    to: '81 99 149',
    alpha: 0.2,
  },
}

type Props = {
  type: Keys
  inactive?: boolean
  outerBoxProps?: BoxProps
  innerBoxProps?: BoxProps
  fontSize?: SvgIconProps['fontSize']
}

export const OptionView = ({
  type,
  inactive = false,
  outerBoxProps: { sx: outerBoxSx, ...restOuterBox } = {},
  innerBoxProps: { sx: innerBoxSx, ...restInnerBox } = {},
  fontSize = 'small',
}: Props) => {
  const { from, to, alpha } = inactive ? inactiveColors : options[type]
  const { Icon } = options[type]

  return (
    <Box
      sx={prepareStyles(outerBoxStyle(from, to, alpha), outerBoxSx)}
      {...restOuterBox}
    >
      <Box
        component="button"
        sx={prepareStyles(innerBoxStyle(from, to), innerBoxSx)}
        {...restInnerBox}
      >
        <Icon fontSize={fontSize} />
      </Box>
    </Box>
  )
}
