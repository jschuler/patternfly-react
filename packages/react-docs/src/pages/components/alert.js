import React from 'react';
import PropTypes from 'prop-types';
import { AlertVariant } from '@patternfly/react-core';
import Docs from '../../components/docs';
import markdown from '../../examples/alert/alert.md';

const propTypes = {
  data: PropTypes.any.isRequired
};

function capitalizeFirstLetter(displayString) {
  return displayString.charAt(0).toUpperCase() + displayString.slice(1);
}

const examples = [
  {
    title: `Notification - ${capitalizeFirstLetter(AlertVariant.success)}`,
    js: require('../../examples/alert/AlertSuccess'),
    raw: require('!!raw!../../examples/alert/AlertSuccess'),
    github: 'examples/alert/AlertSuccess.js'
  },
  {
    title: `Notification - ${capitalizeFirstLetter(AlertVariant.danger)}`,
    js: require('../../examples/alert/AlertDanger'),
    raw: require('!!raw!../../examples/alert/AlertDanger'),
    github: 'components/alert.js'
  },
  {
    title: `Notification - ${capitalizeFirstLetter(AlertVariant.warning)}`,
    js: require('../../examples/alert/AlertWarning'),
    raw: require('!!raw!../../examples/alert/AlertWarning'),
    github: 'components/alert.js'
  },
  {
    title: `Notification - ${capitalizeFirstLetter(AlertVariant.info)}`,
    js: require('../../examples/alert/AlertInfo'),
    raw: require('!!raw!../../examples/alert/AlertInfo'),
    github: 'components/alert.js'
  }
];

const AlertDocs = ({ data }) => (
  <Docs
    title={data.componentMetadata.displayName}
    props={data.componentMetadata.props}
    examples={examples}
    markdown={markdown}
  />
);

AlertDocs.propTypes = propTypes;

export const query = graphql`
  query AlertDocsQuery {
    componentMetadata(displayName: { eq: "Alert" }) {
      ...ComponentDocs
    }
  }
`;

export default AlertDocs;
