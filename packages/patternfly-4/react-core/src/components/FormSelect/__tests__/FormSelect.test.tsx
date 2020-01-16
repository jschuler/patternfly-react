// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { FormSelect } from '../FormSelect';

describe('FormSelect test', () => {
  it('FormSelect should match snapshot', () => {
    const view = mount(
      <FormSelect
        children={<>ReactNode</>}
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
