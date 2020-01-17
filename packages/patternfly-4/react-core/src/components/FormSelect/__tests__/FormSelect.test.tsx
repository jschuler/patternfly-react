// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { FormSelect } from '../FormSelect';

describe('FormSelect test', () => {
  it('FormSelect should match snapshot', () => {
    const view = shallow(
      <FormSelect
        children={<div>ReactNode</div>}
				className={"''"}
				value={''}
				isValid={true}
				validated={'default'}
				isDisabled={false}
				isRequired={false}
				onBlur={(): any => undefined}
				onFocus={(): any => undefined}
				onChange={(): any => undefined}
				aria-label={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
