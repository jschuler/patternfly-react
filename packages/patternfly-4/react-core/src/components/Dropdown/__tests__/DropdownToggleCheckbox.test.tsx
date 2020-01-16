// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { DropdownToggleCheckbox } from '../DropdownToggleCheckbox';

describe('DropdownToggleCheckbox test', () => {
  it('DropdownToggleCheckbox should match snapshot', () => {
    const view = mount(
      <DropdownToggleCheckbox
        className={"''"}
				isValid={true}
				isDisabled={false}
				isChecked={undefined}
				checked={undefined}
				onChange={() => undefined as any}
				children={undefined}
				id={"'defaultString'"}
				aria-label={"'defaultString'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
