// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { NavExpandable } from '../NavExpandable';

describe('NavExpandable test', () => {
  it('NavExpandable should match snapshot', () => {
    const view = shallow(
      <NavExpandable
        title={"'defaultString'"}
				srText={"''"}
				isExpanded={false}
				children={<>ReactNode</>}
				className={"''"}
				groupId={null}
				isActive={false}
				id={"''"}
				onExpand={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
