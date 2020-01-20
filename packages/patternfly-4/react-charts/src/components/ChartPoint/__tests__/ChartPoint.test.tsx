// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartPoint } from '../ChartPoint';
import { Path } from 'victory-core';

describe('ChartPoint test', () => {
  it('ChartPoint should match snapshot', () => {
    const view = shallow(
      <ChartPoint
        active={undefined}
				className={undefined}
				clipPath={undefined}
				data={undefined}
				datum={undefined}
				desc={undefined}
				events={undefined}
				getPath={undefined}
				id={undefined}
				index={undefined}
				origin={undefined}
				pathComponent={<Path />}
				polar={undefined}
				role={"'presentation'"}
				scale={undefined}
				shapeRendering={"'auto'"}
				size={undefined}
				style={undefined}
				symbol={undefined}
				tabIndex={undefined}
				transform={undefined}
				x={undefined}
				y={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
