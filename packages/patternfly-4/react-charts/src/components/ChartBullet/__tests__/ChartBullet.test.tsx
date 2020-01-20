// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBullet } from '../ChartBullet';
import { ChartAxis } from '../../ChartAxis';
import { ChartBulletComparativeErrorMeasure } from './../ChartBulletComparativeErrorMeasure';
import { ChartBulletComparativeMeasure } from './../ChartBulletComparativeMeasure';
import { ChartBulletComparativeWarningMeasure } from './../ChartBulletComparativeWarningMeasure';
import { ChartBulletGroupTitle } from './../ChartBulletGroupTitle';
import { ChartBulletPrimaryDotMeasure } from './../ChartBulletPrimaryDotMeasure';
import { ChartBulletPrimarySegmentedMeasure } from './../ChartBulletPrimarySegmentedMeasure';
import { ChartBulletQualitativeRange } from './../ChartBulletQualitativeRange';
import { ChartBulletTitle } from './../ChartBulletTitle';
import { ChartLegend } from '../../ChartLegend';

describe('ChartBullet test', () => {
  it('ChartBullet should match snapshot', () => {
    const view = shallow(
      <ChartBullet
        allowTooltip={true}
				ariaDesc={undefined}
				ariaTitle={undefined}
				axisComponent={<ChartAxis />}
				bulletSize={42}
				comparativeErrorMeasureComponent={<ChartBulletComparativeErrorMeasure />}
				comparativeErrorMeasureData={undefined}
				comparativeErrorMeasureDataY={undefined}
				comparativeErrorMeasureLegendData={undefined}
				comparativeWarningMeasureComponent={<ChartBulletComparativeWarningMeasure />}
				comparativeWarningMeasureData={undefined}
				comparativeWarningMeasureDataY={undefined}
				comparativeWarningMeasureLegendData={undefined}
				comparativeZeroMeasureComponent={<ChartBulletComparativeMeasure />}
				constrainToVisibleArea={false}
				domain={undefined/*unrecognizedType DomainPropType undefined*/}
				groupTitleComponent={<ChartBulletGroupTitle />}
				groupSubTitle={undefined}
				groupTitle={undefined}
				height={undefined}
				horizontal={true}
				invert={false}
				labels={undefined}
				legendAllowWrap={false}
				legendComponent={<ChartLegend />}
				legendItemsPerRow={undefined}
				legendOrientation={'horizontal'}
				legendPosition={'bottom'}
				maxDomain={undefined}
				minDomain={undefined}
				padding={undefined}
				primaryDotMeasureComponent={<ChartBulletPrimaryDotMeasure />}
				primaryDotMeasureData={undefined}
				primaryDotMeasureDataY={undefined}
				primaryDotMeasureLegendData={undefined}
				primarySegmentedMeasureComponent={<ChartBulletPrimarySegmentedMeasure />}
				primarySegmentedMeasureData={undefined}
				primarySegmentedMeasureDataY={undefined}
				primarySegmentedMeasureLegendData={undefined}
				qualitativeRangeComponent={<ChartBulletQualitativeRange />}
				qualitativeRangeData={undefined}
				qualitativeRangeDataY={undefined}
				qualitativeRangeDataY0={undefined}
				qualitativeRangeLegendData={undefined}
				standalone={true}
				subTitle={undefined}
				theme={undefined/*unrecognizedType ChartThemeDefinition undefined*/}
				themeColor={undefined}
				themeVariant={undefined}
				title={undefined}
				titleComponent={<ChartBulletTitle />}
				titlePosition={undefined}
				width={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
