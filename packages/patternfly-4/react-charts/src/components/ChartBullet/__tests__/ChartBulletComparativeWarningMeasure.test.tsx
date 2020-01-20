// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletComparativeWarningMeasure } from '../ChartBulletComparativeWarningMeasure';
import { ChartBulletComparativeMeasure } from '../ChartBulletComparativeMeasure';

describe('ChartBulletComparativeWarningMeasure test', () => {
  it('ChartBulletComparativeWarningMeasure should match snapshot', () => {
    const view = shallow(
      <ChartBulletComparativeWarningMeasure
        allowTooltip={true}
				ariaDesc={undefined}
				ariaTitle={undefined}
				barWidth={undefined}
				constrainToVisibleArea={false}
				data={undefined}
				domain={undefined}
				height={42}
				horizontal={true}
				labelComponent={undefined}
				labels={undefined}
				measureComponent={<ChartBulletComparativeMeasure />}
				padding={undefined}
				standalone={true}
				theme={{}/*unrecognizedType ChartThemeDefinition undefined*/}
				themeColor={undefined}
				themeVariant={undefined}
				width={42}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
