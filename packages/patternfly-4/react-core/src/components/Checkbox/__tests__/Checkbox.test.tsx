// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from '../Checkbox';

describe('Checkbox test', () => {
  it('Checkbox should match snapshot', () => {
    const view = shallow(
      <Checkbox
        className={"''"}
				isValid={true}
				isDisabled={false}
				isChecked={false}
				checked={undefined}
				onChange={() => {}}
				label={undefined}
				id={"'defaultString'"}
				aria-label={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
