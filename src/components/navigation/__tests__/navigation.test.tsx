import React from 'react'
import { render, screen } from '@testing-library/react'

import { NavigationView } from '../NavigationView'
import { Route } from '../navigation.types'

describe('Navigation component', () => {
  const testID = 'navigation'
  const mockRoutes: Route[] = [
    {
      path: 'mockPath',
      text: 'mockText',
    },
  ]

  it('should be present in the document', () => {
    render(<NavigationView routes={mockRoutes} data-testid={testID} />)
    expect(screen.getByTestId(testID)).toBeInTheDocument()
  })

  it('should contain route', () => {
    render(<NavigationView routes={mockRoutes} />)
    expect(screen.getByRole('link', { name: /mockText/i })).toHaveAttribute(
      'href',
      expect.stringMatching(/mockPath/i)
    )
  })
})
