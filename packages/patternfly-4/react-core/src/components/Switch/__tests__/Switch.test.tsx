// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Switch } from '../Switch';

describe('Switch test', () => {
  it('Switch should match snapshot', () => {
    const view = mount(
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
