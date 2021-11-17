import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Helmet } from 'react-helmet'

type Props = {
  lang?: string
  title: string
  description: string
}

export const SEOView = ({ lang = 'pl-PL', title, description }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <meta
        name="description"
        content={description || site.siteMetadata.description}
      />

      <title>{title || site.siteMetadata.title}</title>
    </Helmet>
  )
}
