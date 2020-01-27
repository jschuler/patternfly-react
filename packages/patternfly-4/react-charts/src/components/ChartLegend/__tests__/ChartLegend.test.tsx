// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartLegend } from '../ChartLegend';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartLegend test', () => {
  it('ChartLegend should match snapshot', () => {
    const view = shallow(
      <ChartLegend
        borderComponent={<p>ReactElement</p>}
				borderPadding={undefined}
				centerTitle={true}
				colorScale={undefined}
				containerComponent={<p>ReactElement</p>}
				data={[]}
				dataComponent={<p>ReactElement</p>}
				eventKey={['string']}
				events={[]}
				externalEventMutations={[]}
				groupComponent={<p>ReactElement</p>}
				gutter={1}
				height={42}
				itemsPerRow={42}
				labelComponent={<p>ReactElement</p>}
				orientation={'horizontal'}
				padding={undefined}
				responsive={true}
				rowGutter={1}
				sharedEvents={'any'}
				standalone={true}
				style={undefined}
				symbolSpacer={42}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				title={['string']}
				titleComponent={<p>ReactElement</p>}
				titleOrientation={undefined}
				width={42}
				x={42}
				y={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
