import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

class InlineList extends React.Component {
  static title = 'Inline List';

  render() {
    return (
      <List variant="inline">
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
      </List>
    );
  }
}

export default InlineList;
