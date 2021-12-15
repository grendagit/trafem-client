import { GatsbyConfig } from 'gatsby'

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'client',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
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
