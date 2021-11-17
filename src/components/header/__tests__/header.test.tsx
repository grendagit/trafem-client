import React from 'react'
import { render, screen } from '@testing-library/react'

import { HeaderView } from '../HeaderView'

describe('Header component', () => {
  it('should be present in the document', () => {
    render(<HeaderView />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })
})
