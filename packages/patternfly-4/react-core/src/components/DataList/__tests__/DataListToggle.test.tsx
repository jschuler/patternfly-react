// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataListToggle } from '../DataListToggle';

describe('DataListToggle test', () => {
  it('DataListToggle should match snapshot', () => {
    const view = shallow(
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
