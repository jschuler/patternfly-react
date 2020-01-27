// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartDonutUtilization } from '../ChartDonutUtilization';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartDonutUtilization test', () => {
  it('ChartDonutUtilization should match snapshot', () => {
    const view = shallow(
      <ChartDonutUtilization
        allowTooltip={true}
				animate={undefined}
				ariaDesc={"string"}
				ariaTitle={"string"}
				capHeight={undefined}
				categories={undefined}
				colorScale={undefined}
				constrainToVisibleArea={true}
				containerComponent={<p>ReactElement</p>}
				cornerRadius={42}
				data={'any'}
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
				legendAllowWrap={true}
				labelComponent={<p>ReactElement</p>}
				labelPosition={'startAngle'}
				legendComponent={<p>ReactElement</p>}
				legendData={[]}
				legendOrientation={'horizontal'}
				legendPosition={'bottom'}
				labelRadius={42}
				labels={['string']}
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
				subTitleComponent={<p>ReactElement</p>}
				subTitlePosition={'bottom'}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				title={"string"}
				thresholds={[]}
				width={42}
				x={undefined}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
