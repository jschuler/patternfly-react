// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Radio } from '../Radio';

describe('Radio test', () => {
  it('Radio should match snapshot', () => {
    const view = shallow(
      <Radio
        className={"''"}
				id={"'defaultString'"}
				isLabelWrapped={undefined}
				isLabelBeforeButton={undefined}
				checked={undefined}
				isChecked={undefined}
				isDisabled={false}
				isValid={true}
				label={undefined}
				name={"'defaultString'"}
				onChange={() => {}}
				aria-label={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
