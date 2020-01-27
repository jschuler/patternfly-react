// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ContextSelectorItem } from '../ContextSelectorItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ContextSelectorItem test', () => {
  it('ContextSelectorItem should match snapshot', () => {
    const view = shallow(
      <ContextSelectorItem
        children={<>ReactNode</>}
				className={"''"}
				isDisabled={false}
				isHovered={false}
				onClick={(): any => undefined}
				index={42}
				sendRef={() => {}}
      />);
    expect(view).toMatchSnapshot();
  });
});
