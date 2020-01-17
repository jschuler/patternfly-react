// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardToggle } from '../WizardToggle';

describe('WizardToggle test', () => {
  it('WizardToggle should match snapshot', () => {
    const view = shallow(
      <WizardToggle
        nav={'any'}
				steps={[]}
				activeStep={{name: 'step'}}
				children={<div>ReactNode</div>}
				hasBodyPadding={true}
				isNavOpen={true}
				onNavToggle={(isOpen: boolean) => undefined as void}
      />);
    expect(view).toMatchSnapshot();
  });
});
