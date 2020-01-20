// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletComparativeErrorMeasure } from '../ChartBulletComparativeErrorMeasure';
import { ChartBulletComparativeMeasure } from './../ChartBulletComparativeMeasure';

describe('ChartBulletComparativeErrorMeasure test', () => {
  it('ChartBulletComparativeErrorMeasure should match snapshot', () => {
    const view = shallow(
      <ChartBulletComparativeErrorMeasure
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
