// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PropertyItem } from '../PropertyItem';

describe('PropertyItem test', () => {
  it('PropertyItem should match snapshot', () => {
    const view = shallow(
      <PropertyItem
        className={"''"}
				label={'string'}
				value={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
