// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletPrimarySegmentedMeasure } from '../ChartBulletPrimarySegmentedMeasure';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartBulletPrimarySegmentedMeasure test', () => {
  it('ChartBulletPrimarySegmentedMeasure should match snapshot', () => {
    const view = shallow(
      <ChartBulletPrimarySegmentedMeasure
        allowTooltip={true}
				ariaDesc={"string"}
				ariaTitle={"string"}
				barWidth={undefined}
				constrainToVisibleArea={false}
				data={[]}
				domain={undefined}
				height={42}
				horizontal={true}
				invert={false}
				labelComponent={<p>ReactElement</p>}
				labels={['string']}
				measureComponent={<p>ReactElement</p>}
				negativeMeasureTheme={undefined}
				padding={undefined}
				standalone={true}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				width={42}
				y={undefined}
				y0={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
