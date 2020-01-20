// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartScatter } from '../ChartScatter';
import { ChartContainer } from '../../ChartContainer';
import { ChartScatterStyles } from '../../ChartTheme';

describe('ChartScatter test', () => {
  it('ChartScatter should match snapshot', () => {
    const view = shallow(
      <ChartScatter
        animate={undefined}
				bubbleProperty={undefined}
				categories={undefined}
				containerComponent={<ChartContainer />}
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
				maxBubbleSize={undefined}
				maxDomain={undefined}
				minBubbleSize={undefined}
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
				size={({ active }) => (active ? ChartScatterStyles.activeSize : ChartScatterStyles.size)}
				sortKey={undefined}
				sortOrder={undefined}
				standalone={undefined}
				style={undefined}
				symbol={undefined}
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
