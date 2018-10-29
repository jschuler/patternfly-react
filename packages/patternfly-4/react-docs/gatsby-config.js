const { resolve } = require('path');

module.exports = {
  siteMetadata: {
    title: 'PatternFly React'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-core/src')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `readme`,
        path: resolve(__dirname, '../react-core/README.md')
      }
    },
    'gatsby-transformer-react-docgen',
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark'
  ],
  pathPrefix: 'patternfly-4'
};
