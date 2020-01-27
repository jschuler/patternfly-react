// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { NavGroup } from '../NavGroup';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('NavGroup test', () => {
  it('NavGroup should match snapshot', () => {
    const view = shallow(
      <NavGroup
        title={"string"}
				children={<>ReactNode</>}
				className={"''"}
				id={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
