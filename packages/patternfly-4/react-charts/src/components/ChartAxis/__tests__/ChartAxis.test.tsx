// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartAxis } from '../ChartAxis';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartAxis test', () => {
  it('ChartAxis should match snapshot', () => {
    const view = shallow(
      <ChartAxis
        animate={undefined}
				axisComponent={<p>ReactElement</p>}
				axisLabelComponent={<p>ReactElement</p>}
				axisValue={'any'}
				containerComponent={<p>ReactElement</p>}
				crossAxis={true}
				dependentAxis={true}
				domain={undefined}
				domainPadding={undefined}
				events={[]}
				externalEventMutations={[]}
				fixLabelOverlap={true}
				gridComponent={<p>ReactElement</p>}
				groupComponent={<p>ReactElement</p>}
				height={42}
				invertAxis={true}
				label={'any'}
				maxDomain={1}
				minDomain={1}
				name={"string"}
				offsetX={42}
				offsetY={42}
				orientation={'top'}
				padding={undefined}
				range={[42, 42]}
				scale={undefined}
				sharedEvents={'any'}
				showGrid={false}
				singleQuadrantDomainPadding={true}
				standalone={true}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				tickComponent={<p>ReactElement</p>}
				tickCount={42}
				tickFormat={[undefined as any]}
				tickLabelComponent={<p>ReactElement</p>}
				tickValues={[]}
				width={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
