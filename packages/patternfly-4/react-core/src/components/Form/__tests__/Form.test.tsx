// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../Form';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Form test', () => {
  it('Form should match snapshot', () => {
    const view = shallow(
      <Form
        children={<>ReactNode</>}
				className={"''"}
				isHorizontal={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
