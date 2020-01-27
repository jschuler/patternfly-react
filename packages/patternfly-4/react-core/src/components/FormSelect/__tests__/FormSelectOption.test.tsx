// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { FormSelectOption } from '../FormSelectOption';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('FormSelectOption test', () => {
  it('FormSelectOption should match snapshot', () => {
    const view = shallow(
      <FormSelectOption
        className={"''"}
				value={''}
				label={"string"}
				isDisabled={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
