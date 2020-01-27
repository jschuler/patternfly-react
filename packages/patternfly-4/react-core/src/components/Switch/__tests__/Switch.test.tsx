// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Switch } from '../Switch';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Switch test', () => {
  it('Switch should match snapshot', () => {
    const view = shallow(
      <Switch
        id={"''"}
				className={"''"}
				label={"''"}
				labelOff={"''"}
				isChecked={true}
				isDisabled={false}
				onChange={() => undefined as any}
				aria-label={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
