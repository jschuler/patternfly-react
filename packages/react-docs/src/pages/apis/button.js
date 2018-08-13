import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Button, ButtonVariant } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

const ButtonDocs = ({ data }) => (
  <ComponentDocs data={data}>
  </ComponentDocs>
);

ButtonDocs.propTypes = propTypes;

export const query = graphql`
  query ButtonApiDocsQuery {
    componentMetadata(displayName: { eq: "Button" }) {
      ...ComponentDocs
    }
  }
`;

export default ButtonDocs;
