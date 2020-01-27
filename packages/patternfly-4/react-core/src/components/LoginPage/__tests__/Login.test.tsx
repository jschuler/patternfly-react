// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../Login';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Login test', () => {
  it('Login should match snapshot', () => {
    const view = shallow(
      <Login
        children={<>ReactNode</>}
				className={"''"}
				footer={null}
				header={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
