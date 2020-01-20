// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletComparativeMeasure } from '../ChartBulletComparativeMeasure';
import { ChartTooltip } from '../../ChartTooltip';
import { ChartBar } from '../../ChartBar';

describe('ChartBulletComparativeMeasure test', () => {
  it('ChartBulletComparativeMeasure should match snapshot', () => {
    const view = shallow(
      <ChartBulletComparativeMeasure
        allowTooltip={true}
				ariaDesc={undefined}
				ariaTitle={undefined}
				barWidth={undefined/*unrecognizedType NumberOrCallback undefined*/}
				constrainToVisibleArea={false}
				data={undefined}
				domain={undefined}
				height={42}
				horizontal={true}
				labelComponent={<ChartTooltip />}
				labels={undefined}
				measureComponent={<ChartBar />}
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
