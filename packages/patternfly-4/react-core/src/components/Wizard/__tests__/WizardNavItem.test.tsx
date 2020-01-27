// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardNavItem } from '../WizardNavItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('WizardNavItem test', () => {
  it('WizardNavItem should match snapshot', () => {
    const view = shallow(
      <WizardNavItem
        children={<>ReactNode</>}
				text={"''"}
				isCurrent={false}
				isDisabled={false}
				step={42}
				onNavItemClick={() => undefined}
				navItemComponent={'a'}
      />);
    expect(view).toMatchSnapshot();
  });
});
