import React from 'react';
import Docs from '../components/docs';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.any.isRequired
};

const ApiDocs = ({ data }) => (
  <Docs
    title={data.componentMetadata.displayName}
    props={data.componentMetadata.props}
  />
);

ApiDocs.propTypes = propTypes;

export const query = graphql`
  query ApiDocsQuery($name: String) {
    componentMetadata(displayName: { eq: $name }) {
      ...ComponentDocs
    }
  }
`;

export default ApiDocs;
