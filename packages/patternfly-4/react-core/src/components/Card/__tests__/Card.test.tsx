// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../Card';

describe('Card test', () => {
  it('Card should match snapshot', () => {
    const view = shallow(
      <Card
        children={<>ReactNode</>}
				className={"''"}
				component={<>ReactNode</>}
				isHoverable={false}
				isCompact={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
