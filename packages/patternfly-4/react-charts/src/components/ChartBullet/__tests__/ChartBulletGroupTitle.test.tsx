// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletGroupTitle } from '../ChartBulletGroupTitle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartBulletGroupTitle test', () => {
  it('ChartBulletGroupTitle should match snapshot', () => {
    const view = shallow(
      <ChartBulletGroupTitle
        ariaDesc={"string"}
				ariaTitle={"string"}
				capHeight={1.1}
				dividerComponent={<p>ReactElement</p>}
				height={42}
				padding={undefined}
				standalone={true}
				subTitle={"string"}
				subTitleComponent={<p>ReactElement</p>}
				theme={undefined}
				themeColor={"string"}
				themeVariant={"string"}
				title={"string"}
				titleComponent={<p>ReactElement</p>}
				width={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
