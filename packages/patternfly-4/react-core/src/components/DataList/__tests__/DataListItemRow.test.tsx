// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataListItemRow } from '../DataListItemRow';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataListItemRow test', () => {
  it('DataListItemRow should match snapshot', () => {
    const view = shallow(
      <DataListItemRow
        children={<div>ReactNode</div>}
				className={"''"}
				rowid={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
