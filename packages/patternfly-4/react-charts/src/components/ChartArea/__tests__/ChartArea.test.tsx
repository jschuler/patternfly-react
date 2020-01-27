// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartArea } from '../ChartArea';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartArea test', () => {
  it('ChartArea should match snapshot', () => {
    const view = shallow(
      <ChartArea
        animate={undefined}
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
				interpolation={undefined}
				labelComponent={<p>ReactElement</p>}
				labels={['string']}
				maxDomain={1}
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
