// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Login } from '../Login';

describe('Login test', () => {
  it('Login should match snapshot', () => {
    const view = mount(
      <Login
        children={<>ReactNode</>}
				className={"''"}
				footer={null}
				header={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
