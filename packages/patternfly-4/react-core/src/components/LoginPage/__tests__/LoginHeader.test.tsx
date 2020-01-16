// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { LoginHeader } from '../LoginHeader';

describe('LoginHeader test', () => {
  it('LoginHeader should match snapshot', () => {
    const view = mount(
      <LoginHeader
        children={<>ReactNode</>}
				className={"''"}
				headerBrand={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
