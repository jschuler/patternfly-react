// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { DataListToggle } from '../DataListToggle';

describe('DataListToggle test', () => {
  it('DataListToggle should match snapshot', () => {
    const view = mount(
      <DataListToggle
        className={"''"}
				isExpanded={false}
				id={"'defaultString'"}
				rowid={"''"}
				aria-labelledby={"''"}
				aria-label={"'Details'"}
				aria-controls={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
