// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { NavList } from '../NavList';

describe('NavList test', () => {
  it('NavList should match snapshot', () => {
    const view = mount(
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
