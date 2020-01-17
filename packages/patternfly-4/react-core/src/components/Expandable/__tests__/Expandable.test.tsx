// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Expandable } from '../Expandable';

describe('Expandable test', () => {
  it('Expandable should match snapshot', () => {
    const view = shallow(
      <Expandable
        children={<div>ReactNode</div>}
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
