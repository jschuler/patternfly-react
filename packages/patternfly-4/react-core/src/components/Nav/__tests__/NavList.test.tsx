// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { NavList } from '../NavList';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('NavList test', () => {
  it('NavList should match snapshot', () => {
    const view = shallow(
      <NavList
        children={<>ReactNode</>}
				className={"''"}
				variant={'default'}
				ariaLeftScroll={"'Scroll left'"}
				ariaRightScroll={"'Scroll right'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
