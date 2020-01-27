// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletTitle } from '../ChartBulletTitle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartBulletTitle test', () => {
  it('ChartBulletTitle should match snapshot', () => {
    const view = shallow(
      <ChartBulletTitle
        ariaDesc={"string"}
				ariaTitle={"string"}
				capHeight={1.1}
				height={42}
				horizontal={true}
				legendPosition={'bottom'}
				padding={undefined}
				standalone={true}
				subTitle={"string"}
				subTitleComponent={<p>ReactElement</p>}
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
