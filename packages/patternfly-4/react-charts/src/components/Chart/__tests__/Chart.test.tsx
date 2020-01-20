// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Chart } from '../Chart';
import { ChartContainer } from '../../ChartContainer';
import { ChartLegend } from '../../ChartLegend';

describe('Chart test', () => {
  it('Chart should match snapshot', () => {
    const view = shallow(
      <Chart
        allowZoom={false}
				animate={undefined}
				ariaDesc={undefined}
				ariaTitle={undefined}
				children={undefined}
				containerComponent={<ChartContainer />}
				domain={undefined}
				domainPadding={undefined}
				endAngle={undefined}
				eventKey={undefined}
				events={undefined}
				externalEventMutations={undefined}
				groupComponent={undefined}
				height={42}
				horizontal={undefined}
				innerRadius={undefined}
				legendAllowWrap={false}
				legendComponent={<ChartLegend />}
				legendData={undefined}
				legendOrientation={'horizontal'}
				legendPosition={'bottom'}
				maxDomain={undefined}
				minDomain={undefined}
				padding={undefined}
				polar={undefined}
				range={undefined}
				scale={undefined}
				sharedEvents={undefined}
				singleQuadrantDomainPadding={undefined}
				standalone={true}
				startAngle={undefined}
				style={undefined}
				themeColor={undefined}
				themeVariant={undefined}
				width={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
