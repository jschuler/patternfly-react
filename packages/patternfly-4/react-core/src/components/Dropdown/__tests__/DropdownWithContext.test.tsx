// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { DropdownWithContext } from '../DropdownWithContext';

describe('DropdownWithContext test', () => {
  it('DropdownWithContext should match snapshot', () => {
    const view = mount(
      <DropdownWithContext
        className={"''"}
				dropdownItems={"[]"}
				isOpen={"false"}
				isPlain={"false"}
				isGrouped={"false"}
				position={"'left'"}
				direction={"'down'"}
				onSelect={"(): void => undefined"}
				autoFocus={"true"}
      />);
    expect(view).toMatchSnapshot();
  });
});
