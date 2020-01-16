// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { DropdownMenu } from '../DropdownMenu';

describe('DropdownMenu test', () => {
  it('DropdownMenu should match snapshot', () => {
    const view = mount(
      <DropdownMenu
        children={undefined}
				className={"''"}
				isOpen={true}
				openedOnEnter={false}
				autoFocus={true}
				component={'ul'}
				position={'right'}
				isGrouped={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
