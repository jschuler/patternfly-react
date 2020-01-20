// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartArea } from '../ChartArea';
import { ChartContainer } from '../../ChartContainer';

describe('ChartArea test', () => {
  it('ChartArea should match snapshot', () => {
    const view = shallow(
      <ChartArea
        animate={undefined}
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
				interpolation={undefined}
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
