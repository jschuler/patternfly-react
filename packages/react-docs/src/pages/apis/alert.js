import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Alert, AlertVariant, Button } from '@patternfly/react-core';
import Example from '../../components/example';
// import AlertExample from '../../components/examples/Alert';
// import { PrismCode } from 'react-prism';
// require('prismjs');
// require('prismjs/themes/prism.css');

const propTypes = {
  data: PropTypes.any.isRequired
};

const AlertDocs = ({ data }) => (
  <ComponentDocs data={data}>
  </ComponentDocs>
);

AlertDocs.propTypes = propTypes;

export const query = graphql`
  query AlertApiDocsQuery {
    componentMetadata(displayName: { eq: "Alert" }) {
      ...ComponentDocs
    }
  }
`;

export default AlertDocs;
