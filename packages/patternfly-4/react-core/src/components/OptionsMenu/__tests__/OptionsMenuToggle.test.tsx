// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { OptionsMenuToggle } from '../OptionsMenuToggle';

describe('OptionsMenuToggle test', () => {
  it('OptionsMenuToggle should match snapshot', () => {
    const view = mount(
      <OptionsMenuToggle
        parentId={"''"}
				onToggle={undefined}
				isOpen={false}
				isPlain={false}
				isFocused={false}
				isHovered={false}
				isSplitButton={false}
				isActive={false}
				isDisabled={false}
				hideCaret={false}
				aria-label={"'Options menu'"}
				onEnter={undefined}
				parentRef={undefined}
				toggleTemplate={<React.Fragment />}
      />);
    expect(view).toMatchSnapshot();
  });
});
