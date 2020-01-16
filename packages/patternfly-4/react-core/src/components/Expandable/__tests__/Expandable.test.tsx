// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Expandable } from '../Expandable';

describe('Expandable test', () => {
  it('Expandable should match snapshot', () => {
    const view = mount(
      <Expandable
        children={<>ReactNode</>}
				className={"''"}
				isExpanded={undefined}
				toggleText={"''"}
				toggleTextExpanded={"''"}
				toggleTextCollapsed={"''"}
				onToggle={(): any => undefined}
				isFocused={false}
				isHovered={false}
				isActive={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
