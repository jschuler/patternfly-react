// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartAxis } from '../ChartAxis';
import { ChartContainer } from '../../ChartContainer';

describe('ChartAxis test', () => {
  it('ChartAxis should match snapshot', () => {
    const view = shallow(
      <ChartAxis
        animate={undefined}
				axisComponent={undefined}
				axisLabelComponent={undefined}
				axisValue={undefined}
				containerComponent={<ChartContainer />}
				crossAxis={undefined}
				dependentAxis={undefined}
				domain={undefined}
				domainPadding={undefined}
				events={undefined}
				externalEventMutations={undefined}
				fixLabelOverlap={undefined}
				gridComponent={undefined}
				groupComponent={undefined}
				height={undefined}
				invertAxis={undefined}
				label={undefined}
				maxDomain={undefined}
				minDomain={undefined}
				name={undefined}
				offsetX={undefined}
				offsetY={undefined}
				orientation={undefined}
				padding={undefined}
				range={undefined}
				scale={undefined}
				sharedEvents={undefined}
				showGrid={false}
				singleQuadrantDomainPadding={undefined}
				standalone={undefined}
				style={undefined}
				theme={{}/*unrecognizedType ChartThemeDefinition undefined*/}
				themeColor={undefined}
				themeVariant={undefined}
				tickComponent={undefined}
				tickCount={undefined}
				tickFormat={undefined}
				tickLabelComponent={undefined}
				tickValues={undefined}
				width={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
