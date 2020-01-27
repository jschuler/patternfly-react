// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PopoverHeader } from '../PopoverHeader';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('PopoverHeader test', () => {
  it('PopoverHeader should match snapshot', () => {
    const view = shallow(
      <PopoverHeader
        id={"string"}
				children={<div>ReactNode</div>}
      />);
    expect(view).toMatchSnapshot();
  });
});
