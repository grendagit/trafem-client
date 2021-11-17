import React from 'react'
import { render, screen } from '@testing-library/react'

import { LogoView } from '../LogoView'

describe('Logo component', () => {
  it('should be present in the document', () => {
    render(<LogoView />)
    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
})
