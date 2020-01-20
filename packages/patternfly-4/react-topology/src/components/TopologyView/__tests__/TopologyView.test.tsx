// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TopologyView } from '../TopologyView';

describe('TopologyView test', () => {
  it('TopologyView should match snapshot', () => {
    const view = shallow(
      <TopologyView
        className={"''"}
				children={<>ReactNode</>}
				contextToolbar={<>ReactNode</>}
				viewToolbar={<>ReactNode</>}
				controlBar={<>ReactNode</>}
				sideBar={<>ReactNode</>}
				sideBarOpen={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
