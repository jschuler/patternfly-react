// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartDonutThreshold } from '../ChartDonutThreshold';
import { ChartContainer } from '../../ChartContainer';

describe('ChartDonutThreshold test', () => {
  it('ChartDonutThreshold should match snapshot', () => {
    const view = shallow(
      <ChartDonutThreshold
        allowTooltip={true}
				animate={undefined}
				ariaDesc={undefined}
				ariaTitle={undefined}
				categories={undefined}
				children={undefined}
				colorScale={undefined}
				constrainToVisibleArea={false}
				containerComponent={<ChartContainer />}
				cornerRadius={undefined}
				data={[]}
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
				labelRadius={undefined}
				labels={[]}
				name={undefined}
				origin={undefined}
				padAngle={undefined}
				padding={undefined}
				radius={undefined}
				sharedEvents={undefined}
				showStatic={undefined}
				sortKey={undefined}
				sortOrder={undefined}
				standalone={true}
				startAngle={undefined}
				style={undefined}
				subTitle={undefined}
				subTitlePosition={'bottom'}
				themeColor={undefined}
				themeVariant={undefined}
				title={undefined}
				width={42}
				x={undefined}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
