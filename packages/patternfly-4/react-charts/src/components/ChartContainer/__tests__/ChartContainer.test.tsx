// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartContainer } from '../ChartContainer';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartContainer test', () => {
  it('ChartContainer should match snapshot', () => {
    const view = shallow(
      <ChartContainer
        children={[undefined as React.ReactNode]}
				className={"string"}
				containerId={1}
				containerRef={undefined}
				desc={"string"}
				events={undefined}
				height={42}
				responsive={true}
				style={undefined}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				title={"string"}
				width={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
