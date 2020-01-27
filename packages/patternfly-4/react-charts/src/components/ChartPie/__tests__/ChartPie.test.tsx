// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartPie } from '../ChartPie';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartPie test', () => {
  it('ChartPie should match snapshot', () => {
    const view = shallow(
      <ChartPie
        allowTooltip={true}
				animate={undefined}
				ariaDesc={"string"}
				ariaTitle={"string"}
				categories={undefined}
				colorScale={undefined}
				constrainToVisibleArea={false}
				containerComponent={<p>ReactElement</p>}
				cornerRadius={42}
				data={[]}
				dataComponent={<p>ReactElement</p>}
				endAngle={42}
				eventKey={undefined}
				events={[]}
				externalEventMutations={[]}
				groupComponent={<p>ReactElement</p>}
				height={42}
				innerRadius={42}
				labelComponent={<p>ReactElement</p>}
				labelPosition={'startAngle'}
				labelRadius={42}
				labels={['string']}
				legendAllowWrap={false}
				legendComponent={<p>ReactElement</p>}
				legendData={[]}
				legendOrientation={'horizontal'}
				legendPosition={'bottom'}
				name={"string"}
				origin={{ x: 42, y: 42 }}
				padAngle={42}
				padding={undefined}
				radius={42}
				sharedEvents={'any'}
				sortKey={['string']}
				sortOrder={'ascending'}
				standalone={true}
				startAngle={42}
				style={undefined}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				width={42}
				x={undefined}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
