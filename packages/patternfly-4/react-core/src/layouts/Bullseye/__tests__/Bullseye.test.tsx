// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Bullseye } from '../Bullseye';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Bullseye test', () => {
  it('Bullseye should match snapshot', () => {
    const view = shallow(
      <Bullseye
        children={<>ReactNode</>}
				className={"''"}
				component={'div'}
      />);
    expect(view).toMatchSnapshot();
  });
});
