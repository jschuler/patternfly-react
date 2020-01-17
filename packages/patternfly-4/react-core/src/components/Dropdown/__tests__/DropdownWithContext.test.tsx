// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownWithContext } from '../DropdownWithContext';

describe('DropdownWithContext test', () => {
  it('DropdownWithContext should match snapshot', () => {
    const view = shallow(
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
