// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Chart } from '../Chart';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Chart test', () => {
  it('Chart should match snapshot', () => {
    const view = shallow(
      <Chart
        allowZoom={false}
				animate={undefined}
				ariaDesc={"string"}
				ariaTitle={"string"}
				children={<div>ReactNode</div>}
				containerComponent={<p>ReactElement</p>}
				domain={undefined}
				domainPadding={undefined}
				endAngle={42}
				eventKey={undefined}
				events={[]}
				externalEventMutations={[]}
				groupComponent={<p>ReactElement</p>}
				height={42}
				horizontal={true}
				innerRadius={42}
				legendAllowWrap={false}
				legendComponent={<p>ReactElement</p>}
				legendData={[]}
				legendOrientation={'horizontal'}
				legendPosition={'bottom'}
				maxDomain={1}
				minDomain={1}
				padding={undefined}
				polar={true}
				range={[42, 42]}
				scale={undefined}
				sharedEvents={'any'}
				singleQuadrantDomainPadding={true}
				standalone={true}
				startAngle={42}
				style={undefined}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				width={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
