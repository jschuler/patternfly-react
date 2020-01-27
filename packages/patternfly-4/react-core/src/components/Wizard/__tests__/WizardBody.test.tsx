// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardBody } from '../WizardBody';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('WizardBody test', () => {
  it('WizardBody should match snapshot', () => {
    const view = shallow(
      <WizardBody
        children={'any'}
				hasBodyPadding={true}
      />);
    expect(view).toMatchSnapshot();
  });
});
