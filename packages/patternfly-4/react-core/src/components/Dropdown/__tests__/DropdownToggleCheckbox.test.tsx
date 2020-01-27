// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownToggleCheckbox } from '../DropdownToggleCheckbox';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DropdownToggleCheckbox test', () => {
  it('DropdownToggleCheckbox should match snapshot', () => {
    const view = shallow(
      <DropdownToggleCheckbox
        className={"''"}
				isValid={true}
				isDisabled={false}
				isChecked={true}
				checked={true}
				onChange={() => undefined as any}
				children={<div>ReactNode</div>}
				id={"string"}
				aria-label={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
