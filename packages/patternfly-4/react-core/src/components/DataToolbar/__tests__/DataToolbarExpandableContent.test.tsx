// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbarExpandableContent } from '../DataToolbarExpandableContent';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataToolbarExpandableContent test', () => {
  it('DataToolbarExpandableContent should match snapshot', () => {
    const view = shallow(
      <DataToolbarExpandableContent
        className={"string"}
				isExpanded={false}
				expandableContentRef={{ current: document.createElement('div') }}
				chipContainerRef={{ current: document.createElement('div') }}
				clearAllFilters={() => undefined as void}
				clearFiltersButtonText={"'Clear all filters'"}
				showClearFiltersButton={true}
      />);
    expect(view).toMatchSnapshot();
  });
});
