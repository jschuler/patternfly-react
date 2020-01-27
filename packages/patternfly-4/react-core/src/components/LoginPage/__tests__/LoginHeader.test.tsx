// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginHeader } from '../LoginHeader';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('LoginHeader test', () => {
  it('LoginHeader should match snapshot', () => {
    const view = shallow(
      <LoginHeader
        children={<>ReactNode</>}
				className={"''"}
				headerBrand={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
