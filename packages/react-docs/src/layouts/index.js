// This is a gatsby limitation will be fixed in newer version
// eslint-disable-next-line
import '@patternfly/react-core/../dist/styles/base.css';
import './index.css';
import React from 'react';
import Helmet from 'react-helmet';
import Page from '../components/page';
import Navigation from '../components/navigation';
import PropTypes from 'prop-types';
// import PrismJsTheme from 'prismjs/themes/prism-solarizedlight.css';
require('prismjs/themes/prism-solarizedlight.css');

const propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.any.isRequired
};

const Layout = ({ children, data }) => {
  const componentRoutes = data.componentPages.edges.map(e => ({
    to: e.node.path,
    label: e.node.fields.label
  }));

  const layoutRoutes = data.layoutPages.edges.map(e => ({
    to: e.node.path,
    label: e.node.fields.label
  }));

  const apiRoutes = data.apiPages.edges.map(e => ({
    to: e.node.path,
    label: e.node.fields.label
  }));

  return (
    <React.Fragment>
      {/* <Helmet
        meta={[
          { name: 'description', content: 'PatternFly React Documentation' },
          { name: 'keywords', content: 'React, PatternFly, Red Hat' }
        ]}
      /> */}
      <Helmet>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js"
          integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js"
          integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.2.0/js/brands.js"
          integrity="sha384-4BRtleJgTYsMKIVuV1Z7lNE29r4MxwKR7u88TWG2GaXsmSljIykt/YDbmKndKGID"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Page
        title="Patternfly React"
        navigation={
          <Navigation
            componentRoutes={componentRoutes}
            layoutRoutes={layoutRoutes}
            apiRoutes={apiRoutes}
          />
        }
      >
        {children()}
      </Page>
    </React.Fragment>
  );
};

Layout.propTypes = propTypes;

export default Layout;

export const query = graphql`
  query SiteLayoutQuery {
    componentPages: allSitePage(filter: { path: { regex: "/components/" } }) {
      edges {
        node {
          path
          fields {
            label
          }
        }
      }
    }
    layoutPages: allSitePage(filter: { path: { regex: "/layouts/" } }) {
      edges {
        node {
          path
          fields {
            label
          }
        }
      }
    }
    apiPages: allSitePage(filter: { path: { regex: "/apis/" } }) {
      edges {
        node {
          path
          fields {
            label
          }
        }
      }
    }
  }
`;
