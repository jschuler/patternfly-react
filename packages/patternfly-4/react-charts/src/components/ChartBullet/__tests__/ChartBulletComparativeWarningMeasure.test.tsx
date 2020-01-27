// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletComparativeWarningMeasure } from '../ChartBulletComparativeWarningMeasure';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartBulletComparativeWarningMeasure test', () => {
  it('ChartBulletComparativeWarningMeasure should match snapshot', () => {
    const view = shallow(
      <ChartBulletComparativeWarningMeasure
        allowTooltip={true}
				ariaDesc={"string"}
				ariaTitle={"string"}
				barWidth={undefined}
				constrainToVisibleArea={false}
				data={[]}
				domain={undefined}
				height={42}
				horizontal={true}
				labelComponent={<p>ReactElement</p>}
				labels={() => {}}
				measureComponent={<p>ReactElement</p>}
				padding={undefined}
				standalone={true}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				width={42}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
