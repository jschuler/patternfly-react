// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TopologyControlBar } from '../TopologyControlBar';

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
