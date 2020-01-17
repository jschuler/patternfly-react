// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Toggle } from '../Toggle';

describe('Toggle test', () => {
  it('Toggle should match snapshot', () => {
    const view = shallow(
      <Toggle
        id={"'defaultString'"}
				type={undefined}
				children={undefined}
				className={"''"}
				isOpen={false}
				onToggle={() => {}}
				onEnter={() => {}}
				parentRef={undefined}
				isFocused={false}
				isHovered={false}
				isActive={false}
				isDisabled={false}
				isPlain={false}
				isPrimary={false}
				isSplitButton={false}
				ariaHasPopup={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
