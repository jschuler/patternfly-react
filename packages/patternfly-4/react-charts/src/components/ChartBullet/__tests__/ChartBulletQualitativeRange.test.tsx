// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletQualitativeRange } from '../ChartBulletQualitativeRange';
import { ChartTooltip } from '../../ChartTooltip';
import { ChartBar } from '../../ChartBar';

describe('ChartBulletQualitativeRange test', () => {
  it('ChartBulletQualitativeRange should match snapshot', () => {
    const view = shallow(
      <ChartBulletQualitativeRange
        allowTooltip={true}
				ariaDesc={undefined}
				ariaTitle={undefined}
				barWidth={undefined/*unrecognizedType NumberOrCallback undefined*/}
				constrainToVisibleArea={false}
				data={undefined}
				domain={undefined}
				height={42}
				horizontal={true}
				invert={false}
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
				y0={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
