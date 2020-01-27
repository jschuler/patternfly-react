// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardHeader } from '../WizardHeader';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('WizardHeader test', () => {
  it('WizardHeader should match snapshot', () => {
    const view = shallow(
      <WizardHeader
        onClose={() => undefined}
				title={"string"}
				description={"string"}
				ariaLabelCloseButton={"string"}
				titleId={"string"}
				descriptionId={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
