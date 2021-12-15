import React, { useState, forwardRef } from 'react'
import type { ComponentProps } from 'react'

import { PrimaryAuthenticationInput } from '../primary-input'
import { inputEndAdornmentStyle } from './password-input.styles'
import Eye from '../../../../assets/svg/icons/eye.inline.svg'
import InvisibleEye from '../../../../assets/svg/icons/invisible-eye.inline.svg'

import { IconButton, InputAdornment, SvgIcon } from '@mui/material'

type Props = Omit<ComponentProps<typeof PrimaryAuthenticationInput>, 'type'>

export const PasswordInputView = forwardRef((props: Props, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleIconButtonClickShowPassword = () => setShowPassword(!showPassword)

  const handleMouseDownShowPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault()

  return (
    <PrimaryAuthenticationInput
      ref={ref}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            size="small"
            edge="end"
            sx={inputEndAdornmentStyle}
            onClick={handleIconButtonClickShowPassword}
            onMouseDown={handleMouseDownShowPassword}
          >
            <SvgIcon component={showPassword ? InvisibleEye : Eye} />
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  )
})
