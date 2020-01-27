// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartPoint } from '../ChartPoint';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartPoint test', () => {
  it('ChartPoint should match snapshot', () => {
    const view = shallow(
      <ChartPoint
        active={true}
				className={"string"}
				clipPath={"string"}
				data={[]}
				datum={'any'}
				desc={() => {}}
				events={'any'}
				getPath={undefined}
				id={1}
				index={1}
				origin={{ x: 42, y: 42 }}
				pathComponent={<p>ReactElement</p>}
				polar={true}
				role={"'presentation'"}
				scale={'any'}
				shapeRendering={"'auto'"}
				size={1}
				style={'any'}
				symbol={'circle'}
				tabIndex={1}
				transform={"string"}
				x={42}
				y={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
