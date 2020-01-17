// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardNav } from '../WizardNav';

describe('WizardNav test', () => {
  it('WizardNav should match snapshot', () => {
    const view = shallow(
      <WizardNav
        children={undefined}
				ariaLabel={undefined}
				isOpen={false}
				returnList={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
