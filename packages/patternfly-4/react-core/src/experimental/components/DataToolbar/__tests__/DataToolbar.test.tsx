// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbar } from '../DataToolbar';

describe('DataToolbar test', () => {
  it('DataToolbar should match snapshot', () => {
    const view = shallow(
      <DataToolbar
        clearAllFilters={undefined}
				clearFiltersButtonText={undefined}
				collapseListedFiltersBreakpoint={undefined}
				isExpanded={undefined}
				toggleIsExpanded={undefined}
				className={undefined}
				children={undefined}
				id={"'defaultString'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
