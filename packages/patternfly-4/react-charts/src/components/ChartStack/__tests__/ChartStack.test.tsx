// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartStack } from '../ChartStack';
import { ChartContainer } from '../../ChartContainer';

describe('ChartStack test', () => {
  it('ChartStack should match snapshot', () => {
    const view = shallow(
      <ChartStack
        animate={undefined}
				ariaDesc={undefined}
				ariaTitle={undefined}
				categories={undefined}
				children={undefined}
				colorScale={undefined}
				containerComponent={<ChartContainer />}
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
				scale={undefined}
				sharedEvents={undefined}
				singleQuadrantDomainPadding={undefined}
				standalone={undefined}
				style={undefined}
				theme={{}/*unrecognizedType ChartThemeDefinition undefined*/}
				themeColor={undefined}
				themeVariant={undefined}
				width={undefined}
				xOffset={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
