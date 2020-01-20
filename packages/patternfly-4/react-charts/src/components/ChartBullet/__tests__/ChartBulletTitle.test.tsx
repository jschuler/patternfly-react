// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletTitle } from '../ChartBulletTitle';
import { ChartLabel } from '../../ChartLabel';

describe('ChartBulletTitle test', () => {
  it('ChartBulletTitle should match snapshot', () => {
    const view = shallow(
      <ChartBulletTitle
        ariaDesc={undefined}
				ariaTitle={undefined}
				capHeight={1.1}
				height={undefined}
				horizontal={true}
				legendPosition={'bottom'}
				padding={undefined}
				standalone={true}
				subTitle={undefined}
				subTitleComponent={<ChartLabel />}
				themeColor={undefined}
				themeVariant={undefined}
				title={undefined}
				titleComponent={<ChartLabel />}
				titlePosition={undefined}
				width={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
