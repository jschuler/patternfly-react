// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Badge } from '../Badge';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Badge test', () => {
  it('Badge should match snapshot', () => {
    const view = shallow(
      <Badge
        isRead={false}
				children={''}
				className={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
