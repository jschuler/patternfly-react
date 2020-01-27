// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TopologyView } from '../TopologyView';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('TopologyView test', () => {
  it('TopologyView should match snapshot', () => {
    const view = shallow(
      <TopologyView
        className={"''"}
				children={<>ReactNode</>}
				contextToolbar={null}
				viewToolbar={null}
				controlBar={null}
				sideBar={null}
				sideBarOpen={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
