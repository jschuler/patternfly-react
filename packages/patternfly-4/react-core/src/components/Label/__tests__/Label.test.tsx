// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Label } from '../Label';

describe('Label test', () => {
  it('Label should match snapshot', () => {
    const view = shallow(
      <Label
        children={<div>ReactNode</div>}
				className={"''"}
				isCompact={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
