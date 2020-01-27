// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletPrimaryDotMeasure } from '../ChartBulletPrimaryDotMeasure';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartBulletPrimaryDotMeasure test', () => {
  it('ChartBulletPrimaryDotMeasure should match snapshot', () => {
    const view = shallow(
      <ChartBulletPrimaryDotMeasure
        allowTooltip={true}
				ariaDesc={"string"}
				ariaTitle={"string"}
				constrainToVisibleArea={false}
				data={[]}
				domain={undefined}
				height={42}
				horizontal={true}
				invert={false}
				labelComponent={<p>ReactElement</p>}
				labels={['string']}
				measureComponent={<p>ReactElement</p>}
				padding={undefined}
				size={1}
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
