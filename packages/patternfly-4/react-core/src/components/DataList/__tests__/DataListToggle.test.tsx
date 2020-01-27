// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataListToggle } from '../DataListToggle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataListToggle test', () => {
  it('DataListToggle should match snapshot', () => {
    const view = shallow(
      <DataListToggle
        className={"''"}
				isExpanded={false}
				id={"string"}
				rowid={"''"}
				aria-labelledby={"''"}
				aria-label={"'Details'"}
				aria-controls={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
