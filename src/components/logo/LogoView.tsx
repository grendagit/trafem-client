import React from 'react'
import { Link } from 'gatsby'

import { TestID } from '../../types/test.type'

type Props = TestID

export const LogoView = (props: Props) => {
  return (
    <div {...props}>
      <Link to="/">Logo</Link>
    </div>
  )
}
