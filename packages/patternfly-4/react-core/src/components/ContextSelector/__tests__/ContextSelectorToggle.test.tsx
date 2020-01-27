// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ContextSelectorToggle } from '../ContextSelectorToggle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ContextSelectorToggle test', () => {
  it('ContextSelectorToggle should match snapshot', () => {
    const view = shallow(
      <ContextSelectorToggle
        id={"string"}
				className={"''"}
				toggleText={"''"}
				isOpen={false}
				onToggle={(event: any, value: boolean) => undefined as any}
				onEnter={() => undefined as any}
				parentRef={null}
				isFocused={false}
				isHovered={false}
				isActive={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
