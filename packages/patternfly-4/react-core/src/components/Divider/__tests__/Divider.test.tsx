// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Divider } from '../Divider';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Divider test', () => {
  it('Divider should match snapshot', () => {
    const view = shallow(
      <Divider
        className={"''"}
				component={'hr'}
      />);
    expect(view).toMatchSnapshot();
  });
});
