// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartLabel } from '../ChartLabel';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChartLabel test', () => {
  it('ChartLabel should match snapshot', () => {
    const view = shallow(
      <ChartLabel
        active={true}
				angle={1}
				capHeight={undefined}
				children={undefined}
				className={"string"}
				data={[]}
				datum={{}}
				desc={"string"}
				direction={'rtl'}
				dx={undefined}
				dy={undefined}
				events={undefined}
				index={1}
				labelPlacement={'parallel'}
				lineHeight={undefined}
				origin={{ x: 42, y: 42 }}
				polar={true}
				renderInPortal={true}
				scale={{ x: 42, y: 42 }}
				style={[undefined as React.CSSProperties]}
				text={['string']}
				textAnchor={undefined}
				transform={undefined}
				verticalAnchor={undefined}
				x={42}
				y={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
