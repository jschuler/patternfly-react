// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { WizardNavItem } from '../WizardNavItem';

describe('WizardNavItem test', () => {
  it('WizardNavItem should match snapshot', () => {
    const view = mount(
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
