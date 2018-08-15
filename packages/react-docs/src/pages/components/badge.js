import React from 'react';
import PropTypes from 'prop-types';
import Docs from '../../components/docs';

const propTypes = {
  data: PropTypes.any.isRequired
};

const examples = [
  {
    title: 'Unread Badge',
    js: require('../../examples/badge/UnreadBadge'),
    raw: require('!!raw!../../examples/badge/UnreadBadge'),
    github: 'examples/badge/UnreadBadge.js'
  },
  {
    title: 'Read Badge',
    js: require('../../examples/badge/ReadBadge'),
    raw: require('!!raw!../../examples/badge/ReadBadge'),
    github: 'examples/badge/ReadBadge.js'
  }
];

const BadgeDocs = ({ data }) => (
  <Docs
    title={data.componentMetadata.displayName}
    props={data.componentMetadata.props}
    examples={examples}
    style={{ background: 'white' }}
  />
);

BadgeDocs.propTypes = propTypes;

export const query = graphql`
  query BadgeDocsQuery {
    componentMetadata(displayName: { eq: "Badge" }) {
      ...ComponentDocs
    }
  }
`;

export default BadgeDocs;
