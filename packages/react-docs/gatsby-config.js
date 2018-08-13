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
        path: resolve(__dirname, '../react-core/src/components')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `layouts`,
        path: resolve(__dirname, '../react-core/src/layouts')
      }
    },
    'gatsby-transformer-react-docgen',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ['gatsby-remark-prismjs']
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: resolve(__dirname, 'src/examples'),
        name: 'markdown-pages'
      }
    },
    'gatsby-transformer-remark'
  ]
};
