// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PopoverDialog } from '../PopoverDialog';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('PopoverDialog test', () => {
  it('PopoverDialog should match snapshot', () => {
    const view = shallow(
      <PopoverDialog
        position={'top'}
				className={"null"}
				children={<>ReactNode</>}
      />);
    expect(view).toMatchSnapshot();
  });
});
