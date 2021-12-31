import React from 'react'
import type { ComponentProps } from 'react'

import { InputBox } from '../input-box'
import { fromToBoxStyle, separatorBoxStyle } from './from-to-input-box.styles'

import { Box } from '@mui/material'

type Props = {
  separator?: string
  fromInput: JSX.Element
  toInput: JSX.Element
} & ComponentProps<typeof InputBox>

export const FromToInputBoxView = ({
  separator = '—',
  fromInput,
  toInput,
  label,
}: Props) => {
  return (
    <InputBox label={label}>
      <Box sx={fromToBoxStyle}>
        {fromInput}
        <Box sx={separatorBoxStyle}>{separator}</Box>
        {toInput}
      </Box>
    </InputBox>
  )
}
