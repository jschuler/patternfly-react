// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbarGroup } from '../DataToolbarGroup';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataToolbarGroup test', () => {
  it('DataToolbarGroup should match snapshot', () => {
    const view = shallow(
      <DataToolbarGroup
        className={"string"}
				variant={'filter-group'}
				breakpointMods={[]}
				children={<div>ReactNode</div>}
				innerRef={{ current: document.createElement('div') }}
      />);
    expect(view).toMatchSnapshot();
  });
});
