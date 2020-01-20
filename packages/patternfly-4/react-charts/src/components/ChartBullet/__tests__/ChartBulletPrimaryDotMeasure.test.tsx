// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletPrimaryDotMeasure } from '../ChartBulletPrimaryDotMeasure';
import { ChartTooltip } from '../../ChartTooltip';
import { ChartScatter } from '../../ChartScatter';

describe('ChartBulletPrimaryDotMeasure test', () => {
  it('ChartBulletPrimaryDotMeasure should match snapshot', () => {
    const view = shallow(
      <ChartBulletPrimaryDotMeasure
        allowTooltip={true}
				ariaDesc={undefined}
				ariaTitle={undefined}
				constrainToVisibleArea={false}
				data={undefined}
				domain={undefined}
				height={42}
				horizontal={true}
				invert={false}
				labelComponent={<ChartTooltip />}
				labels={undefined}
				measureComponent={<ChartScatter />}
				padding={undefined}
				size={1}
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
