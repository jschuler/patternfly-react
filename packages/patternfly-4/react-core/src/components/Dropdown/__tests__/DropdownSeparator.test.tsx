// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownSeparator } from '../DropdownSeparator';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DropdownSeparator test', () => {
  it('DropdownSeparator should match snapshot', () => {
    const view = shallow(
      <DropdownSeparator
        className={"''"}
				onClick={(event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent | MouseEvent) => undefined as void}
      />);
    expect(view).toMatchSnapshot();
  });
});
