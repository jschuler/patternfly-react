// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { NavGroup } from '../NavGroup';

describe('NavGroup test', () => {
  it('NavGroup should match snapshot', () => {
    const view = shallow(
      <NavGroup
        title={"'defaultString'"}
				children={<>ReactNode</>}
				className={"''"}
				id={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
