// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../Login';

describe('Login test', () => {
  it('Login should match snapshot', () => {
    const view = shallow(
      <Login
        children={<>ReactNode</>}
				className={"''"}
				footer={<>ReactNode</>}
				header={<>ReactNode</>}
      />);
    expect(view).toMatchSnapshot();
  });
});
