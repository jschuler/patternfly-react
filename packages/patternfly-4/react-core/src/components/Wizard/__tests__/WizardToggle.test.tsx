// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { WizardToggle } from '../WizardToggle';

describe('WizardToggle test', () => {
  it('WizardToggle should match snapshot', () => {
    const view = mount(
      <WizardToggle
        nav={unrecognizedType any undefined, consider reporting error to react-jest-test-generator.}
				steps={unrecognizedType Array undefined, consider reporting error to react-jest-test-generator.}
				activeStep={unrecognizedType WizardStep undefined, consider reporting error to react-jest-test-generator.}
				children={<>ReactNode</>}
				hasBodyPadding={true}
				isNavOpen={true}
				onNavToggle={(isOpen: boolean) => void}
      />);
    expect(view).toMatchSnapshot();
  });
});
