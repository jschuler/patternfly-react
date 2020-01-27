// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { NotificationBadge } from '../NotificationBadge';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('NotificationBadge test', () => {
  it('NotificationBadge should match snapshot', () => {
    const view = shallow(
      <NotificationBadge
        isRead={false}
				children={<div>ReactNode</div>}
				className={"string"}
				aria-label={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
