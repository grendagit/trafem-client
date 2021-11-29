import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

import { SEOView } from '../SEOView'

import Helmet from 'react-helmet'

describe('SEO component', () => {
  const mockTitle = 'mockTitle'
  const mockDescription = 'mockDescription'

  beforeAll(() => {
    ;(useStaticQuery as jest.Mock).mockReturnValue({
      site: {
        siteMetadata: {
          title: 'useStaticQueryMockTitle',
          description: 'useStaticQueryMockDescription',
        },
      },
    })
  })

  it('should set title and description', () => {
    render(<SEOView title={mockTitle} description={mockDescription} />)
    const { title, metaTags } = Helmet.peek()

    expect(title).toBe(mockTitle)
    expect(metaTags[0].content).toBe(mockDescription)
  })
})
