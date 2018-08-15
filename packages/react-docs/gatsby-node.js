const path = require(`path`);
const pascalCase = require('pascal-case');

exports.modifyWebpackConfig = ({ config, stage }) => {
  const oldCSSLoader = config._loaders.css;
  const pfStylesTest = /patternfly-next.*(components|layouts|utilities).*\.css$/;
  config.removeLoader('css');
  if (oldCSSLoader.config.loaders && oldCSSLoader.config.loaders.includes('postcss')) {
    oldCSSLoader.config.loaders.splice(oldCSSLoader.config.loaders.indexOf('postcss'), 1);
  }
  config
    .loader('pf-styles', {
      test: pfStylesTest,
      loaders: ['babel-loader', require.resolve('@patternfly/react-styles/loader')]
    })
    .loader('css', {
      ...oldCSSLoader.config,
      exclude: pfStylesTest
    })
    .loader('markdown-loader', {
      test: /\.md$/,
      loader: 'html-loader!markdown-loader'
    });

  config.merge({
    resolve: {
      alias: {
        '@patternfly/react-core': path.resolve(__dirname, '../react-core/src'),
        '@patternfly/react-styles': path.resolve(__dirname, '../react-styles/src'),
        react: path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
      }
    }
  });

  return config;
};

const componentPathRegEx = /(components|layouts|apis)\//;

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  const isSitePage = node.internal.type === 'SitePage';
  const isComponentMetadata = node.internal.type === 'ComponentMetadata';

  if (isSitePage && componentPathRegEx.test(node.path)) {
    const pathLabel = node.path
      .split('/')
      .filter(Boolean)
      .pop();

    // Add an extra field to graphql so we can name the sidebar item
    createNodeField({
      node,
      name: 'label',
      value: pascalCase(pathLabel)
    });
  } else if (isComponentMetadata) {
    // Add an extra field to graphql so we can name the sidebar item
    createNodeField({
      node,
      name: 'label',
      value: node.displayName
    });
    // Add field for first character so we can group by it
    createNodeField({
      node,
      name: 'firstChar',
      value: node.displayName.charAt(0)
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allComponentMetadata(sort: {fields:[displayName], order: ASC}) {
          edges {
            node {
              fields {
                label
              }
              displayName
              description
              props {
                name
                type {
                  value
                  raw
                }
                required
              }
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allComponentMetadata.edges.forEach(({ node }) => {
        createPage({
          path: `api/${node.displayName}`,
          component: path.resolve(`./src/templates/api.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            name: node.displayName
          }
        });
      });
      resolve();
    });
  });
};
