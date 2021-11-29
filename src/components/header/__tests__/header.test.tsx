import React from 'react'
import { render, screen } from '@testing-library/react'

import { HeaderView } from '../HeaderView'

describe('Header component', () => {
  const testID = 'header'
  it('should be present in the document', () => {
    render(<HeaderView data-testid={testID} />)
    expect(screen.getByTestId(testID)).toBeInTheDocument()
  })
})
