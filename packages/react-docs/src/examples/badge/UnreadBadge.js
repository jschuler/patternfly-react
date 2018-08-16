import React from 'react';
import { Badge } from '@patternfly/react-core';
import './badge.scss';

const UnreadBadge = () => (
  <div className="spacer">
    <Badge>7</Badge>
    <Badge>24</Badge>
    <Badge>240</Badge>
    <Badge>999+</Badge>
  </div>
);

export default UnreadBadge;
