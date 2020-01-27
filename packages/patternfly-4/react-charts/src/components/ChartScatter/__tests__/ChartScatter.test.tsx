// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartScatter } from '../ChartScatter';
// any missing imports can usually be resolved by adding them here
import { ChartScatterStyles } from '../..';

describe('ChartScatter test', () => {
  it('ChartScatter should match snapshot', () => {
    const view = shallow(
      <ChartScatter
        animate={undefined}
				bubbleProperty={"string"}
				categories={undefined}
				containerComponent={<p>ReactElement</p>}
				data={[]}
				dataComponent={<p>ReactElement</p>}
				domain={undefined}
				domainPadding={undefined}
				eventKey={undefined}
				events={[]}
				externalEventMutations={[]}
				groupComponent={<p>ReactElement</p>}
				height={42}
				horizontal={true}
				labelComponent={<p>ReactElement</p>}
				labels={['string']}
				maxBubbleSize={42}
				maxDomain={1}
				minBubbleSize={42}
				minDomain={1}
				name={"string"}
				origin={{ x: 42, y: 42 }}
				padding={undefined}
				polar={true}
				range={[42, 42]}
				samples={42}
				scale={undefined}
				sharedEvents={'any'}
				singleQuadrantDomainPadding={true}
				size={({ active }) => (active ? ChartScatterStyles.activeSize : ChartScatterStyles.size)}
				sortKey={['string']}
				sortOrder={'ascending'}
				standalone={true}
				style={undefined}
				symbol={undefined}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				width={42}
				x={undefined}
				y={undefined}
				y0={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
