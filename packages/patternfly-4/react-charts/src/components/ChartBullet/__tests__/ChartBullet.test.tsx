// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBullet } from '../ChartBullet';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartBullet test', () => {
  it('ChartBullet should match snapshot', () => {
    const view = shallow(
      <ChartBullet
        allowTooltip={true}
				ariaDesc={"string"}
				ariaTitle={"string"}
				axisComponent={<p>ReactElement</p>}
				bulletSize={42}
				comparativeErrorMeasureComponent={<p>ReactElement</p>}
				comparativeErrorMeasureData={[]}
				comparativeErrorMeasureDataY={undefined}
				comparativeErrorMeasureLegendData={[]}
				comparativeWarningMeasureComponent={<p>ReactElement</p>}
				comparativeWarningMeasureData={[]}
				comparativeWarningMeasureDataY={undefined}
				comparativeWarningMeasureLegendData={[]}
				comparativeZeroMeasureComponent={<p>ReactElement</p>}
				constrainToVisibleArea={false}
				domain={undefined}
				groupTitleComponent={<p>ReactElement</p>}
				groupSubTitle={"string"}
				groupTitle={"string"}
				height={42}
				horizontal={true}
				invert={false}
				labels={(point: any, index: number, points: any[]) => undefined as string}
				legendAllowWrap={false}
				legendComponent={<p>ReactElement</p>}
				legendItemsPerRow={42}
				legendOrientation={'horizontal'}
				legendPosition={'bottom'}
				maxDomain={1}
				minDomain={1}
				padding={undefined}
				primaryDotMeasureComponent={<p>ReactElement</p>}
				primaryDotMeasureData={[]}
				primaryDotMeasureDataY={undefined}
				primaryDotMeasureLegendData={[]}
				primarySegmentedMeasureComponent={<p>ReactElement</p>}
				primarySegmentedMeasureData={[]}
				primarySegmentedMeasureDataY={undefined}
				primarySegmentedMeasureLegendData={[]}
				qualitativeRangeComponent={<p>ReactElement</p>}
				qualitativeRangeData={[]}
				qualitativeRangeDataY={undefined}
				qualitativeRangeDataY0={undefined}
				qualitativeRangeLegendData={[]}
				standalone={true}
				subTitle={"string"}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				title={"string"}
				titleComponent={<p>ReactElement</p>}
				titlePosition={'left'}
				width={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
