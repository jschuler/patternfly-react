// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartVoronoiContainer } from '../ChartVoronoiContainer';
import { VictoryVoronoiContainerProps } from 'victory';

describe('ChartVoronoiContainer test', () => {
  it('ChartVoronoiContainer should match snapshot', () => {
    const view = shallow(
      <ChartVoronoiContainer
        activateData={true}
				activateLabels={true}
				allowTooltip={true}
				className={"string"}
				constrainToVisibleArea={false}
				disable={true}
				labels={(point: any, index: number, points: any[]) => undefined as string}
				labelComponent={<p>ReactElement</p>}
				mouseFollowTooltips={true}
				onActivated={(points: any[], props: VictoryVoronoiContainerProps) => undefined as void}
				onDeactivated={(points: any[], props: VictoryVoronoiContainerProps) => undefined as void}
				radius={42}
				responsive={true}
				style={undefined}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				voronoiBlacklist={[]}
				voronoiDimension={'x'}
				voronoiPadding={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
