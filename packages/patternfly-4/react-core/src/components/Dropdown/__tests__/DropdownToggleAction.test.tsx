// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownToggleAction } from '../DropdownToggleAction';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DropdownToggleAction test', () => {
  it('DropdownToggleAction should match snapshot', () => {
    const view = shallow(
      <DropdownToggleAction
        className={"''"}
				isDisabled={false}
				onClick={() => {}}
				children={<div>ReactNode</div>}
				id={"string"}
				aria-label={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
