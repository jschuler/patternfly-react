// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { OptionsMenuToggle } from '../OptionsMenuToggle';

describe('OptionsMenuToggle test', () => {
  it('OptionsMenuToggle should match snapshot', () => {
    const view = shallow(
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
				toggleTemplate={<>ReactNode</>}
      />);
    expect(view).toMatchSnapshot();
  });
});
