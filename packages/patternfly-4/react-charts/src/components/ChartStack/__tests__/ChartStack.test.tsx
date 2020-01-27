// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartStack } from '../ChartStack';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartStack test', () => {
  it('ChartStack should match snapshot', () => {
    const view = shallow(
      <ChartStack
        animate={undefined}
				ariaDesc={"string"}
				ariaTitle={"string"}
				categories={undefined}
				children={<div>ReactNode</div>}
				colorScale={undefined}
				containerComponent={<p>ReactElement</p>}
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
				origin={{ x: 42, y: 42 }}
				padding={undefined}
				polar={true}
				range={[42, 42]}
				scale={undefined}
				sharedEvents={'any'}
				singleQuadrantDomainPadding={true}
				standalone={true}
				style={undefined}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				width={42}
				xOffset={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
