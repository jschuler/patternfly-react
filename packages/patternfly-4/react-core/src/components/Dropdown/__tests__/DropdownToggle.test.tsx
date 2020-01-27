// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownToggle } from '../DropdownToggle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DropdownToggle test', () => {
  it('DropdownToggle should match snapshot', () => {
    const view = shallow(
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
				splitButtonItems={[]}
				splitButtonVariant={'checkbox'}
				aria-label={"string"}
				ariaHasPopup={true}
				type={'button'}
				onEnter={(event?: React.MouseEvent<HTMLButtonElement>) => undefined as void}
      />);
    expect(view).toMatchSnapshot();
  });
});
