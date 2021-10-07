import { GatsbyConfig } from 'gatsby'

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'client',
  },
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-styled-components'],
}

export default gatsbyConfig
