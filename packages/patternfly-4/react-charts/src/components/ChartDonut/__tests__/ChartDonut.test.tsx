// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartDonut } from '../ChartDonut';
import { ChartContainer } from '../../ChartContainer';
import { ChartLabel } from '../../ChartLabel';

describe('ChartDonut test', () => {
  it('ChartDonut should match snapshot', () => {
    const view = shallow(
      <ChartDonut
        allowTooltip={true}
				animate={undefined}
				ariaDesc={undefined}
				ariaTitle={undefined}
				capHeight={1.1}
				categories={undefined}
				colorScale={undefined}
				constrainToVisibleArea={undefined}
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
				labelComponent={undefined}
				labelPosition={undefined}
				labelRadius={undefined}
				labels={undefined}
				legendAllowWrap={undefined}
				legendComponent={undefined}
				legendData={undefined}
				legendOrientation={undefined}
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
				subTitle={undefined}
				subTitleComponent={<ChartLabel />}
				subTitlePosition={'bottom'}
				themeColor={undefined}
				themeVariant={undefined}
				title={undefined}
				titleComponent={<ChartLabel />}
				width={42}
				x={undefined}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
