// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbarChipGroupContent } from '../DataToolbarChipGroupContent';

describe('DataToolbarChipGroupContent test', () => {
  it('DataToolbarChipGroupContent should match snapshot', () => {
    const view = shallow(
      <DataToolbarChipGroupContent
        className={undefined}
				isExpanded={undefined}
				chipGroupContentRef={undefined}
				clearAllFilters={undefined}
				showClearFiltersButton={true}
				clearFiltersButtonText={"'Clear all filters'"}
				numberOfFilters={42}
				collapseListedFiltersBreakpoint={'lg'}
      />);
    expect(view).toMatchSnapshot();
  });
});
