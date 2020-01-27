// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { KebabToggle } from '../KebabToggle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('KebabToggle test', () => {
  it('KebabToggle should match snapshot', () => {
    const view = shallow(
      <KebabToggle
        id={"''"}
				children={<>ReactNode</>}
				className={"''"}
				isOpen={false}
				aria-label={"'Actions'"}
				onToggle={() => undefined as void}
				parentRef={null}
				isFocused={false}
				isHovered={false}
				isActive={false}
				isDisabled={false}
				isPlain={false}
				type={'button'}
      />);
    expect(view).toMatchSnapshot();
  });
});
