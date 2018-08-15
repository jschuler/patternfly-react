import React from 'react';
import Docs from '../docs';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.any.isRequired,
  examples: PropTypes.any,
  markdown: PropTypes.any
};

const defaultProps = {
  examples: null,
  markdown: null
};

const ComponentDocs = ({ data, examples, markdown }) => (
  <Docs
    title={data.componentMetadata.displayName}
    props={data.componentMetadata.props}
    examples={examples}
    markdown={markdown}
  />
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
