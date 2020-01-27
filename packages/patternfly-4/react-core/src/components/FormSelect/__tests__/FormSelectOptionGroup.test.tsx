// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { FormSelectOptionGroup } from '../FormSelectOptionGroup';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('FormSelectOptionGroup test', () => {
  it('FormSelectOptionGroup should match snapshot', () => {
    const view = shallow(
      <FormSelectOptionGroup
        children={<>ReactNode</>}
				className={"''"}
				label={"string"}
				isDisabled={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
