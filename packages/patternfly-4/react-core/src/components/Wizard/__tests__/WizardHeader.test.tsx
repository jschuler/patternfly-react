// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardHeader } from '../WizardHeader';

describe('WizardHeader test', () => {
  it('WizardHeader should match snapshot', () => {
    const view = shallow(
      <WizardHeader
        onClose={() => undefined}
				title={"'defaultString'"}
				description={undefined}
				ariaLabelCloseButton={undefined}
				titleId={undefined}
				descriptionId={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
