import React from 'react'
import { render, screen } from '@testing-library/react'

import { LogoView } from '../LogoView'

describe('Logo component', () => {
  const testID = 'logo'
  it('should be present in the document', () => {
    render(<LogoView data-testid={testID} />)
    expect(screen.getByTestId(testID)).toBeInTheDocument()
  })
})
