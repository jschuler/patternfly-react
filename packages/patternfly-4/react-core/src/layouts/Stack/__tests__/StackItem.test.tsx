// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { StackItem } from '../StackItem';

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
