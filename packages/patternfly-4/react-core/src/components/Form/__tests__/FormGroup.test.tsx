// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { FormGroup } from '../FormGroup';

describe('FormGroup test', () => {
  it('FormGroup should match snapshot', () => {
    const view = mount(
      <FormGroup
        children={<>ReactNode</>}
				className={"''"}
				label={undefined}
				isRequired={false}
				isValid={true}
				validated={'default'}
				isInline={false}
				helperText={undefined}
				helperTextInvalid={undefined}
				fieldId={"'defaultString'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
