// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { DropdownToggle } from '../DropdownToggle';

describe('DropdownToggle test', () => {
  it('DropdownToggle should match snapshot', () => {
    const view = mount(
      <DropdownToggle
        id={"''"}
				children={<>ReactNode</>}
				className={"''"}
				isOpen={false}
				onToggle={(_isOpen: boolean) => undefined as any}
				parentRef={null}
				isFocused={false}
				isHovered={false}
				isActive={false}
				isPlain={false}
				isDisabled={false}
				isPrimary={false}
				iconComponent={() => <p>ReactElementType</p>}
				splitButtonItems={undefined}
				splitButtonVariant={'checkbox'}
				aria-label={undefined}
				ariaHasPopup={undefined}
				type={undefined}
				onEnter={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
