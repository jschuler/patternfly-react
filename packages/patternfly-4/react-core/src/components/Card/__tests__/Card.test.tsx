// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../Card';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Card test', () => {
  it('Card should match snapshot', () => {
    const view = shallow(
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
