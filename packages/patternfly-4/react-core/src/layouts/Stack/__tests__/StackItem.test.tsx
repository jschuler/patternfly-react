// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { StackItem } from '../StackItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('StackItem test', () => {
  it('StackItem should match snapshot', () => {
    const view = shallow(
      <StackItem
        isFilled={false}
				children={<>ReactNode</>}
				className={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
