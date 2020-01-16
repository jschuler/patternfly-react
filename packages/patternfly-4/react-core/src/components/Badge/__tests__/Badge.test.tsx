// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Badge } from '../Badge';

describe('Badge test', () => {
  it('Badge should match snapshot', () => {
    const view = mount(
      <Badge
        isRead={false}
				children={''}
				className={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
