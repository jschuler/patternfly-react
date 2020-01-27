// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TopologyControlBar } from '../TopologyControlBar';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('TopologyControlBar test', () => {
  it('TopologyControlBar should match snapshot', () => {
    const view = shallow(
      <TopologyControlBar
        className={"null"}
				children={<>ReactNode</>}
				controlButtons={[]}
				onButtonClick={() => undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
