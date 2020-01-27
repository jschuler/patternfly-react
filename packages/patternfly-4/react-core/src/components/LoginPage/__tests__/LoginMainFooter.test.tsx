// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginMainFooter } from '../LoginMainFooter';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('LoginMainFooter test', () => {
  it('LoginMainFooter should match snapshot', () => {
    const view = shallow(
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
