// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PopoverDialog } from '../PopoverDialog';

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
