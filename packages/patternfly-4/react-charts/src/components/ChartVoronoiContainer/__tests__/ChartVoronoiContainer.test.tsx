// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartVoronoiContainer } from '../ChartVoronoiContainer';
import { ChartTooltip } from '../../ChartTooltip';

describe('ChartVoronoiContainer test', () => {
  it('ChartVoronoiContainer should match snapshot', () => {
    const view = shallow(
      <ChartVoronoiContainer
        activateData={undefined}
				activateLabels={undefined}
				allowTooltip={true}
				className={undefined}
				constrainToVisibleArea={false}
				disable={undefined}
				labels={undefined}
				labelComponent={<ChartTooltip />}
				mouseFollowTooltips={undefined}
				onActivated={undefined}
				onDeactivated={undefined}
				radius={undefined}
				responsive={undefined}
				style={undefined}
				theme={{}/*unrecognizedType ChartThemeDefinition undefined*/}
				themeColor={undefined}
				themeVariant={undefined}
				voronoiBlacklist={undefined}
				voronoiDimension={undefined}
				voronoiPadding={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
