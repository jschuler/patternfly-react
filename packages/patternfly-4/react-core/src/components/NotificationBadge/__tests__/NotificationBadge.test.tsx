// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { NotificationBadge } from '../NotificationBadge';

describe('NotificationBadge test', () => {
  it('NotificationBadge should match snapshot', () => {
    const view = shallow(
      <NotificationBadge
        isRead={false}
				children={undefined}
				className={undefined}
				aria-label={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
