// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartDonutThreshold } from '../ChartDonutThreshold';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartDonutThreshold test', () => {
  it('ChartDonutThreshold should match snapshot', () => {
    const view = shallow(
      <ChartDonutThreshold
        allowTooltip={true}
				animate={undefined}
				ariaDesc={"string"}
				ariaTitle={"string"}
				categories={undefined}
				children={<p>ReactElement</p>}
				colorScale={undefined}
				constrainToVisibleArea={false}
				containerComponent={<p>ReactElement</p>}
				cornerRadius={42}
				data={[]}
				dataComponent={<p>ReactElement</p>}
				desc={"string"}
				endAngle={42}
				eventKey={undefined}
				events={[]}
				externalEventMutations={[]}
				groupComponent={<p>ReactElement</p>}
				height={42}
				innerRadius={42}
				invert={false}
				labelRadius={42}
				labels={[]}
				name={"string"}
				origin={{ x: 42, y: 42 }}
				padAngle={42}
				padding={undefined}
				radius={42}
				sharedEvents={'any'}
				showStatic={true}
				sortKey={['string']}
				sortOrder={'ascending'}
				standalone={true}
				startAngle={42}
				style={undefined}
				subTitle={"string"}
				subTitlePosition={'bottom'}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				title={"string"}
				width={42}
				x={undefined}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
