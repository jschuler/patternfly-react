// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Toggle } from '../Toggle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Toggle test', () => {
  it('Toggle should match snapshot', () => {
    const view = shallow(
      <Toggle
        id={"string"}
				type={'button'}
				children={<div>ReactNode</div>}
				className={"''"}
				isOpen={false}
				onToggle={() => {}}
				onEnter={() => {}}
				parentRef={'any'}
				isFocused={false}
				isHovered={false}
				isActive={false}
				isDisabled={false}
				isPlain={false}
				isPrimary={false}
				isSplitButton={false}
				ariaHasPopup={true}
      />);
    expect(view).toMatchSnapshot();
  });
});
