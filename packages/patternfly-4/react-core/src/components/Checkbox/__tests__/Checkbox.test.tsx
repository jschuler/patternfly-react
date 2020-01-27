// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from '../Checkbox';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Checkbox test', () => {
  it('Checkbox should match snapshot', () => {
    const view = shallow(
      <Checkbox
        className={"''"}
				isValid={true}
				isDisabled={false}
				isChecked={false}
				checked={true}
				onChange={() => {}}
				label={<div>ReactNode</div>}
				id={"string"}
				aria-label={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
