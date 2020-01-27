// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PopoverCloseButton } from '../PopoverCloseButton';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('PopoverCloseButton test', () => {
  it('PopoverCloseButton should match snapshot', () => {
    const view = shallow(
      <PopoverCloseButton
        aria-label={"string"}
				onClose={() => undefined as void}
      />);
    expect(view).toMatchSnapshot();
  });
});
