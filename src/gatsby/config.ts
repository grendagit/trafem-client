import { GatsbyConfig } from 'gatsby'

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'client',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
}

export default gatsbyConfig
