// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardFooterInternal } from '../WizardFooterInternal';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('WizardFooterInternal test', () => {
  it('WizardFooterInternal should match snapshot', () => {
    const view = shallow(
      <WizardFooterInternal
        onNext={'any'}
				onBack={'any'}
				onClose={'any'}
				isValid={true}
				firstStep={true}
				activeStep={undefined}
				nextButtonText={"string"}
				backButtonText={"string"}
				cancelButtonText={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
