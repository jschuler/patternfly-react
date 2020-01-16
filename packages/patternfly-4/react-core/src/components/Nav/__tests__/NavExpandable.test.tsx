// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { NavExpandable } from '../NavExpandable';

describe('NavExpandable test', () => {
  it('NavExpandable should match snapshot', () => {
    const view = mount(
      <NavExpandable
        title={"'defaultString'"}
				srText={"''"}
				isExpanded={false}
				children={''}
				className={"''"}
				groupId={null}
				isActive={false}
				id={"''"}
				onExpand={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
