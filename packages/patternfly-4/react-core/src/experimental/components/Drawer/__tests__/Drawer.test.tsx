// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Drawer } from '../Drawer';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Drawer test', () => {
  it('Drawer should match snapshot', () => {
    const view = shallow(
      <Drawer
        className={"''"}
				children={<div>ReactNode</div>}
				isExpanded={false}
				isInline={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
