// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartPie } from '../ChartPie';
import { ChartContainer } from '../../ChartContainer';
import { ChartTooltip } from '../../ChartTooltip';
import { ChartLegend } from '../../ChartLegend';

describe('ChartPie test', () => {
  it('ChartPie should match snapshot', () => {
    const view = shallow(
      <ChartPie
        allowTooltip={true}
				animate={undefined}
				ariaDesc={undefined}
				ariaTitle={undefined}
				categories={undefined}
				colorScale={undefined}
				constrainToVisibleArea={false}
				containerComponent={<ChartContainer />}
				cornerRadius={undefined}
				data={undefined}
				dataComponent={undefined}
				endAngle={undefined}
				eventKey={undefined}
				events={undefined}
				externalEventMutations={undefined}
				groupComponent={undefined}
				height={42}
				innerRadius={undefined}
				labelComponent={<ChartTooltip constrainToVisibleArea={false} theme={{}} />}
				labelPosition={undefined}
				labelRadius={undefined}
				labels={undefined}
				legendAllowWrap={false}
				legendComponent={<ChartLegend />}
				legendData={undefined}
				legendOrientation={'horizontal'}
				legendPosition={'bottom'}
				name={undefined}
				origin={undefined}
				padAngle={undefined}
				padding={undefined}
				radius={undefined}
				sharedEvents={undefined}
				sortKey={undefined}
				sortOrder={undefined}
				standalone={true}
				startAngle={undefined}
				style={undefined}
				themeColor={undefined}
				themeVariant={undefined}
				width={42}
				x={undefined}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
