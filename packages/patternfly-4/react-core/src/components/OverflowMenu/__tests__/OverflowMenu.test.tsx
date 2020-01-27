// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { OverflowMenu } from '../OverflowMenu';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('OverflowMenu test', () => {
  it('OverflowMenu should match snapshot', () => {
    const view = shallow(
      <OverflowMenu
        children={'any'}
				className={"string"}
				breakpoint={'md'}
      />);
    expect(view).toMatchSnapshot();
  });
});
