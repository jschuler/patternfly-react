// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbarToggleGroup } from '../DataToolbarToggleGroup';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataToolbarToggleGroup test', () => {
  it('DataToolbarToggleGroup should match snapshot', () => {
    const view = shallow(
      <DataToolbarToggleGroup
        toggleIcon={<div>ReactNode</div>}
				breakpoint={'md'}
				breakpointMods={[]}
      />);
    expect(view).toMatchSnapshot();
  });
});
