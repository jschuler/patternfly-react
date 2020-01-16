// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { NavGroup } from '../NavGroup';

describe('NavGroup test', () => {
  it('NavGroup should match snapshot', () => {
    const view = mount(
      <NavGroup
        title={"'defaultString'"}
				children={<>ReactNode</>}
				className={"''"}
				id={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
