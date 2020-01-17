// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { NavItem } from '../NavItem';

describe('NavItem test', () => {
  it('NavItem should match snapshot', () => {
    const view = shallow(
      <NavItem
        children={<>ReactNode</>}
				className={"''"}
				to={"''"}
				isActive={false}
				groupId={null}
				itemId={null}
				preventDefault={false}
				onClick={null}
				component={'a'}
      />);
    expect(view).toMatchSnapshot();
  });
});
