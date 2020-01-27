// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartTooltip } from '../ChartTooltip';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartTooltip test', () => {
  it('ChartTooltip should match snapshot', () => {
    const view = shallow(
      <ChartTooltip
        active={true}
				activateData={true}
				angle={1}
				center={{ x: 42, y: 42 }}
				centerOffset={{ x: 42, y: 42 }}
				constrainToVisibleArea={false}
				cornerRadius={undefined}
				data={[]}
				datum={{}}
				dx={undefined}
				dy={undefined}
				events={{}}
				flyoutComponent={<p>ReactElement</p>}
				flyoutHeight={undefined}
				flyoutStyle={undefined}
				flyoutWidth={undefined}
				groupComponent={<p>ReactElement</p>}
				horizontal={true}
				index={1}
				labelComponent={<p>ReactElement</p>}
				orientation={undefined}
				pointerLength={undefined}
				pointerOrientation={'top'}
				pointerWidth={undefined}
				renderInPortal={true}
				style={undefined}
				text={['string']}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				x={42}
				y={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
