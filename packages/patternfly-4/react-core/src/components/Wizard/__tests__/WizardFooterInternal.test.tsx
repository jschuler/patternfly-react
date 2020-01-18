// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardFooterInternal } from '../WizardFooterInternal';

describe('WizardFooterInternal test', () => {
  it('WizardFooterInternal should match snapshot', () => {
    const view = shallow(
      <WizardFooterInternal
        onNext={'any'}
				onBack={'any'}
				onClose={'any'}
				isValid={true}
				firstStep={true}
				activeStep={() => {}}
				nextButtonText={"'defaultString'"}
				backButtonText={"'defaultString'"}
				cancelButtonText={"'defaultString'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
