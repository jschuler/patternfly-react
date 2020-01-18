// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PopoverBody } from '../PopoverBody';

describe('PopoverBody test', () => {
  it('PopoverBody should match snapshot', () => {
    const view = shallow(
      <PopoverBody
        id={"'defaultString'"}
				children={<div>ReactNode</div>}
      />);
    expect(view).toMatchSnapshot();
  });
});
