// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbarExpandableContent } from '../DataToolbarExpandableContent';

describe('DataToolbarExpandableContent test', () => {
  it('DataToolbarExpandableContent should match snapshot', () => {
    const view = shallow(
      <DataToolbarExpandableContent
        className={undefined}
				isExpanded={false}
				expandableContentRef={undefined}
				chipContainerRef={undefined}
				clearAllFilters={undefined}
				clearFiltersButtonText={"'Clear all filters'"}
				showClearFiltersButton={true}
      />);
    expect(view).toMatchSnapshot();
  });
});
