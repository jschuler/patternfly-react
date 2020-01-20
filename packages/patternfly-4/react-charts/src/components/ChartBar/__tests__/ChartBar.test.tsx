// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBar } from '../ChartBar';
import { ChartContainer } from '../../ChartContainer';

describe('ChartBar test', () => {
  it('ChartBar should match snapshot', () => {
    const view = shallow(
      <ChartBar
        alignment={undefined}
				animate={undefined}
				barRatio={undefined}
				barWidth={undefined}
				categories={undefined}
				containerComponent={<ChartContainer />}
				cornerRadius={undefined}
				data={undefined}
				dataComponent={undefined}
				domain={undefined}
				domainPadding={undefined}
				eventKey={undefined}
				events={undefined}
				externalEventMutations={undefined}
				groupComponent={undefined}
				height={undefined}
				horizontal={undefined}
				labelComponent={undefined}
				labels={undefined}
				maxDomain={undefined}
				minDomain={undefined}
				name={undefined}
				origin={undefined}
				padding={undefined}
				polar={undefined}
				range={undefined}
				samples={undefined}
				scale={undefined}
				sharedEvents={undefined}
				singleQuadrantDomainPadding={undefined}
				sortKey={undefined}
				sortOrder={undefined}
				standalone={undefined}
				style={undefined}
				theme={{}/*unrecognizedType ChartThemeDefinition undefined*/}
				themeColor={undefined}
				themeVariant={undefined}
				width={undefined}
				x={undefined}
				y={undefined}
				y0={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
