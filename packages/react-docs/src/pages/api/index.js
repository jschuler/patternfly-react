import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Title, Badge } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from './api.styles';

const propTypes = {
  data: PropTypes.any.isRequired
};

const ApiDocsIndex = ({ data }) => {
  const groups = data.allComponentMetadata.group;

  return (
    <div className={css(styles.apiContent)}>
      <Title size="4xl" withMargins>
        API
      </Title>
      {groups.map(group => (
        <div>
          <Title size="xl" withMargins>
            {group.edges[0].node.fields.firstChar}
          </Title>
          <div>
            {group.edges.map(edge => (
              <Link
                to={`/api/${edge.node.displayName}`}
                className={css(styles.apiItem)}
              >
                <Badge>{edge.node.displayName}</Badge>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

ApiDocsIndex.propTypes = propTypes;

export const query = graphql`
  query ApiDocsIndexQuery {
    allComponentMetadata(sort: { fields: [displayName], order: ASC }) {
      group(field: fields___firstChar) {
        edges {
          node {
            fields {
              label
              firstChar
            }
            ...ComponentDocs
          }
        }
      }
    }
  }
`;

export default ApiDocsIndex;
