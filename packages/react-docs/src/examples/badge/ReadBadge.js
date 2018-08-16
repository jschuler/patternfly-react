import React from 'react';
import { Badge } from '@patternfly/react-core';
import './badge.scss';

const ReadBadge = () => (
  <div className="spacer">
    <Badge isRead>7</Badge>
    <Badge isRead>24</Badge>
    <Badge isRead>240</Badge>
    <Badge isRead>999+</Badge>
  </div>
);

export default ReadBadge;
