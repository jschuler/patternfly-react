// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardNav } from '../WizardNav';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('WizardNav test', () => {
  it('WizardNav should match snapshot', () => {
    const view = shallow(
      <WizardNav
        children={'any'}
				ariaLabel={"string"}
				isOpen={false}
				returnList={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
