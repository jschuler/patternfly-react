// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownToggleCheckbox } from '../DropdownToggleCheckbox';

describe('DropdownToggleCheckbox test', () => {
  it('DropdownToggleCheckbox should match snapshot', () => {
    const view = shallow(
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
