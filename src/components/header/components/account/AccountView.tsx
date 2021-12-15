import React from 'react'
import { Link } from 'gatsby'

import { boxStyle, iconStyle, linkStyle, linkTextStyle } from './account.styles'
import Heart from '../../../../assets/svg/icons/heart.inline.svg'
import PencilDrawing from '../../../../assets/svg/icons/pencil-drawing.inline.svg'
import Chat from '../../../../assets/svg/icons/chat.inline.svg'
import Notification from '../../../../assets/svg/icons/notification.inline.svg'

import { Box, IconButton, Stack, SvgIcon } from '@mui/material'

export const AccountView = () => {
  return (
    <Box sx={boxStyle}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        paddingX={2}
      >
        <Link to="/end-user/reviews" style={linkStyle}>
          <SvgIcon component={PencilDrawing} sx={iconStyle} />
          <Box component="span" sx={linkTextStyle}>
            Recenzje
          </Box>
        </Link>
        <Link to="/end-user/favourites" style={linkStyle}>
          <SvgIcon component={Heart} sx={iconStyle} />
          <Box component="span" sx={linkTextStyle}>
            Wydarzenia
          </Box>
        </Link>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0.5}
        paddingX={1}
      >
        <IconButton sx={iconStyle}>
          <SvgIcon component={Chat} />
        </IconButton>
        <IconButton sx={iconStyle}>
          <SvgIcon component={Notification} />
        </IconButton>
      </Stack>
    </Box>
  )
}
