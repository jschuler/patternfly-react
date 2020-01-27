// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartGroup } from '../ChartGroup';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartGroup test', () => {
  it('ChartGroup should match snapshot', () => {
    const view = shallow(
      <ChartGroup
        allowZoom={false}
				animate={undefined}
				ariaDesc={"string"}
				ariaTitle={"string"}
				categories={undefined}
				children={<div>ReactNode</div>}
				color={"string"}
				colorScale={undefined}
				containerComponent={<p>ReactElement</p>}
				data={[]}
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
				maxDomain={1}
				minDomain={1}
				name={"string"}
				offset={42}
				origin={{ x: 42, y: 42 }}
				padding={undefined}
				polar={true}
				range={[42, 42]}
				samples={42}
				scale={undefined}
				sharedEvents={'any'}
				singleQuadrantDomainPadding={true}
				sortKey={['string']}
				sortOrder={'ascending'}
				standalone={true}
				style={undefined}
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
