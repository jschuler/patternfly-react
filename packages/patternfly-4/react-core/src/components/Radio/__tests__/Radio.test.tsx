// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Radio } from '../Radio';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Radio test', () => {
  it('Radio should match snapshot', () => {
    const view = shallow(
      <Radio
        className={"''"}
				id={"string"}
				isLabelWrapped={true}
				isLabelBeforeButton={true}
				checked={true}
				isChecked={true}
				isDisabled={false}
				isValid={true}
				label={<div>ReactNode</div>}
				name={"string"}
				onChange={() => {}}
				aria-label={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
