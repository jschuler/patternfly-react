// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { FormGroup } from '../FormGroup';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('FormGroup test', () => {
  it('FormGroup should match snapshot', () => {
    const view = shallow(
      <FormGroup
        children={<>ReactNode</>}
				className={"''"}
				label={<div>ReactNode</div>}
				isRequired={false}
				isValid={true}
				validated={'default'}
				isInline={false}
				helperText={<div>ReactNode</div>}
				helperTextInvalid={<div>ReactNode</div>}
				fieldId={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
