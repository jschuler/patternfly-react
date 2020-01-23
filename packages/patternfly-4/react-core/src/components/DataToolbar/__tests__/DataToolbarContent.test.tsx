// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbarContent } from '../DataToolbarContent';

describe('DataToolbarContent test', () => {
  it('DataToolbarContent should match snapshot', () => {
    const view = shallow(
      <DataToolbarContent
        className={undefined}
				breakpointMods={[]}
				children={undefined}
				isExpanded={false}
				clearAllFilters={undefined}
				showClearFiltersButton={false}
				clearFiltersButtonText={undefined}
				toolbarId={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
