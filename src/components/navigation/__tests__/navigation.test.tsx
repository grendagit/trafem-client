import React from 'react'
import { render, screen } from '@testing-library/react'

import { NavigationView } from '../NavigationView'
import { Route } from '../navigation.type'

describe('Navigation component', () => {
  const mockRoutes: Route[] = [
    {
      path: 'mockPath',
      text: 'mockText',
    },
  ]

  it('should be present in the document', () => {
    render(<NavigationView routes={mockRoutes} />)
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
  })

  it('should contain route', () => {
    render(<NavigationView routes={mockRoutes} />)
    expect(screen.getByRole('link', { name: /mockText/i })).toHaveAttribute(
      'href',
      expect.stringMatching(/mockPath/i)
    )
  })
})
