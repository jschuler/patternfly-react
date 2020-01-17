// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../LoginForm';

describe('LoginForm test', () => {
  it('LoginForm should match snapshot', () => {
    const view = shallow(
      <LoginForm
        noAutoFocus={false}
				className={"''"}
				showHelperText={false}
				helperText={null}
				usernameLabel={"'Username'"}
				usernameValue={"''"}
				onChangeUsername={() => undefined as any}
				isValidUsername={true}
				passwordLabel={"'Password'"}
				passwordValue={"''"}
				onChangePassword={() => undefined as any}
				isValidPassword={true}
				loginButtonLabel={"'Log In'"}
				isLoginButtonDisabled={false}
				onLoginButtonClick={() => undefined as any}
				rememberMeLabel={"''"}
				isRememberMeChecked={false}
				onChangeRememberMe={() => undefined as any}
				rememberMeAriaLabel={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
