// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { LoginMainFooter } from '../LoginMainFooter';

describe('LoginMainFooter test', () => {
  it('LoginMainFooter should match snapshot', () => {
    const view = mount(
      <LoginMainFooter
        className={"''"}
				children={<>ReactNode</>}
				socialMediaLoginContent={null}
				signUpForAccountMessage={null}
				forgotCredentials={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
