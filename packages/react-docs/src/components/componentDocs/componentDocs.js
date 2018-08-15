import React from 'react';
import Docs from '../docs';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  markdown: PropTypes.any
};

const defaultProps = {
  markdown: null
};

const ComponentDocs = ({ data, children, markdown }) => (
  <Docs title={data.componentMetadata.displayName} props={data.componentMetadata.props} markdown={markdown}>
    {children}
  </Docs>
);

ComponentDocs.propTypes = propTypes;
ComponentDocs.defaultProps = defaultProps;

export const componentDocsFragment = graphql`
  fragment ComponentDocs on ComponentMetadata {
    displayName
    props {
      name
      defaultValue {
        value
      }
      type {
        value
        name
        raw
      }
      required
    }
  }
`;

export default ComponentDocs;
