// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartLegend } from '../ChartLegend';
import { ChartContainer } from '../../ChartContainer';
import { ChartPoint } from '../../ChartPoint';

describe('ChartLegend test', () => {
  it('ChartLegend should match snapshot', () => {
    const view = shallow(
      <ChartLegend
        borderComponent={undefined}
				borderPadding={undefined}
				centerTitle={undefined}
				colorScale={undefined}
				containerComponent={<ChartContainer />}
				data={undefined}
				dataComponent={<ChartPoint />}
				eventKey={undefined}
				events={undefined}
				externalEventMutations={undefined}
				groupComponent={undefined}
				gutter={undefined}
				height={undefined}
				itemsPerRow={undefined}
				labelComponent={undefined}
				orientation={undefined}
				padding={undefined}
				responsive={true}
				rowGutter={undefined}
				sharedEvents={undefined}
				standalone={undefined}
				style={undefined}
				symbolSpacer={undefined}
				theme={{}/*unrecognizedType ChartThemeDefinition undefined*/}
				themeColor={undefined}
				themeVariant={undefined}
				title={undefined}
				titleComponent={undefined}
				titleOrientation={undefined}
				width={undefined}
				x={undefined}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
