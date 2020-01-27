// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbarChipGroupContent } from '../DataToolbarChipGroupContent';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataToolbarChipGroupContent test', () => {
  it('DataToolbarChipGroupContent should match snapshot', () => {
    const view = shallow(
      <DataToolbarChipGroupContent
        className={"string"}
				isExpanded={true}
				chipGroupContentRef={{ current: document.createElement('div') }}
				clearAllFilters={() => undefined as void}
				showClearFiltersButton={true}
				clearFiltersButtonText={"'Clear all filters'"}
				numberOfFilters={42}
				collapseListedFiltersBreakpoint={'lg'}
      />);
    expect(view).toMatchSnapshot();
  });
});
