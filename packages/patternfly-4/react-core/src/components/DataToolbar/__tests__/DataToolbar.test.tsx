// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbar } from '../DataToolbar';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataToolbar test', () => {
  it('DataToolbar should match snapshot', () => {
    const view = shallow(
      <DataToolbar
        clearAllFilters={() => undefined as void}
				clearFiltersButtonText={"string"}
				collapseListedFiltersBreakpoint={'md'}
				isExpanded={true}
				toggleIsExpanded={() => undefined as void}
				className={"string"}
				children={<div>ReactNode</div>}
				id={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
