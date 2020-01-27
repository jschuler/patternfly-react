// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PopoverContent } from '../PopoverContent';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('PopoverContent test', () => {
  it('PopoverContent should match snapshot', () => {
    const view = shallow(
      <PopoverContent
        className={"null"}
				children={<div>ReactNode</div>}
      />);
    expect(view).toMatchSnapshot();
  });
});
