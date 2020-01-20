// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartDonutUtilization } from '../ChartDonutUtilization';
import { ChartContainer } from '../../ChartContainer';

describe('ChartDonutUtilization test', () => {
  it('ChartDonutUtilization should match snapshot', () => {
    const view = shallow(
      <ChartDonutUtilization
        allowTooltip={true}
				animate={undefined}
				ariaDesc={undefined}
				ariaTitle={undefined}
				capHeight={undefined}
				categories={undefined}
				colorScale={undefined}
				constrainToVisibleArea={undefined}
				containerComponent={<ChartContainer />}
				cornerRadius={undefined}
				data={undefined}
				dataComponent={undefined}
				desc={undefined}
				endAngle={undefined}
				eventKey={undefined}
				events={undefined}
				externalEventMutations={undefined}
				groupComponent={undefined}
				height={42}
				innerRadius={undefined}
				invert={false}
				legendAllowWrap={undefined}
				labelComponent={undefined}
				labelPosition={undefined}
				legendComponent={undefined}
				legendData={undefined}
				legendOrientation={undefined}
				legendPosition={'bottom'}
				labelRadius={undefined}
				labels={undefined}
				name={undefined}
				origin={undefined}
				padAngle={undefined}
				padding={undefined}
				radius={undefined}
				sharedEvents={undefined}
				showStatic={true}
				sortKey={undefined}
				sortOrder={undefined}
				standalone={true}
				startAngle={undefined}
				style={undefined}
				subTitle={undefined}
				subTitleComponent={undefined}
				subTitlePosition={undefined}
				theme={{}/*unrecognizedType ChartThemeDefinition undefined*/}
				themeColor={undefined}
				themeVariant={undefined}
				title={undefined}
				thresholds={undefined}
				width={42}
				x={undefined}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
