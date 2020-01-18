// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../LoginPage';

describe('LoginPage test', () => {
  it('LoginPage should match snapshot', () => {
    const view = shallow(
      <LoginPage
        children={<>ReactNode</>}
				className={"''"}
				brandImgSrc={"''"}
				brandImgAlt={"''"}
				backgroundImgSrc={''}
				backgroundImgAlt={"''"}
				textContent={"''"}
				footerListItems={<>ReactNode</>}
				footerListVariants={undefined}
				loginTitle={"'defaultString'"}
				loginSubtitle={undefined}
				signUpForAccountMessage={<>ReactNode</>}
				forgotCredentials={<>ReactNode</>}
				socialMediaLoginContent={<>ReactNode</>}
      />);
    expect(view).toMatchSnapshot();
  });
});
