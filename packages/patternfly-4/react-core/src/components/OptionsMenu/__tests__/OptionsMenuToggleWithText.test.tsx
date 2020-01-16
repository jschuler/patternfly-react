// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { OptionsMenuToggleWithText } from '../OptionsMenuToggleWithText';

describe('OptionsMenuToggleWithText test', () => {
  it('OptionsMenuToggleWithText should match snapshot', () => {
    const view = mount(
      <OptionsMenuToggleWithText
        parentId={"''"}
				toggleText={<>ReactNode</>}
				toggleTextClassName={"''"}
				toggleButtonContents={undefined}
				toggleButtonContentsClassName={"''"}
				onToggle={() => null as any}
				onEnter={undefined}
				isOpen={false}
				isPlain={false}
				isFocused={false}
				isHovered={false}
				isActive={false}
				isDisabled={false}
				parentRef={undefined}
				ariaHasPopup={undefined}
				aria-label={"'Options menu'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
