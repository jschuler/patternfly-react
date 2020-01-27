// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletQualitativeRange } from '../ChartBulletQualitativeRange';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartBulletQualitativeRange test', () => {
  it('ChartBulletQualitativeRange should match snapshot', () => {
    const view = shallow(
      <ChartBulletQualitativeRange
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
