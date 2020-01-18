// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PopoverCloseButton } from '../PopoverCloseButton';

describe('PopoverCloseButton test', () => {
  it('PopoverCloseButton should match snapshot', () => {
    const view = shallow(
      <PopoverCloseButton
        aria-label={"'defaultString'"}
				onClose={() => undefined as void}
      />);
    expect(view).toMatchSnapshot();
  });
});
