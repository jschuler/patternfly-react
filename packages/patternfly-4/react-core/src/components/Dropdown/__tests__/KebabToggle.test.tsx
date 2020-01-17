// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { KebabToggle } from '../KebabToggle';

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
				type={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
