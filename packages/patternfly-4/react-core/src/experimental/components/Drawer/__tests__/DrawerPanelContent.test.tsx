// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DrawerPanelContent } from '../DrawerPanelContent';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DrawerPanelContent test', () => {
  it('DrawerPanelContent should match snapshot', () => {
    const view = shallow(
      <DrawerPanelContent
        className={"''"}
				children={<div>ReactNode</div>}
				noPadding={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
