// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Card } from '../Card';

describe('Card test', () => {
  it('Card should match snapshot', () => {
    const view = mount(
      <Card
        children={<>ReactNode</>}
				className={"''"}
				component={'article'}
				isHoverable={false}
				isCompact={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
