// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartGroup } from '../ChartGroup';
import { ChartContainer } from '../../ChartContainer';

describe('ChartGroup test', () => {
  it('ChartGroup should match snapshot', () => {
    const view = shallow(
      <ChartGroup
        allowZoom={false}
				animate={undefined}
				ariaDesc={undefined}
				ariaTitle={undefined}
				categories={undefined}
				children={undefined}
				color={undefined}
				colorScale={undefined}
				containerComponent={<ChartContainer />}
				data={undefined}
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
				offset={undefined}
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
