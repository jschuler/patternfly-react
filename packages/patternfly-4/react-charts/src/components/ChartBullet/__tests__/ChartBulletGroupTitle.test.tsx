// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletGroupTitle } from '../ChartBulletGroupTitle';
import { Line } from 'victory-core';
import { ChartLabel } from '../../ChartLabel';

describe('ChartBulletGroupTitle test', () => {
  it('ChartBulletGroupTitle should match snapshot', () => {
    const view = shallow(
      <ChartBulletGroupTitle
        ariaDesc={undefined}
				ariaTitle={undefined}
				capHeight={1.1}
				dividerComponent={<Line />}
				height={42}
				padding={undefined}
				standalone={true}
				subTitle={undefined}
				subTitleComponent={<ChartLabel />}
				themeColor={undefined}
				themeVariant={undefined}
				title={undefined}
				titleComponent={<ChartLabel />}
				width={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
