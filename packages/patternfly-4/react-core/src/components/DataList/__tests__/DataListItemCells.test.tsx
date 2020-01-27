// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataListItemCells } from '../DataListItemCells';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataListItemCells test', () => {
  it('DataListItemCells should match snapshot', () => {
    const view = shallow(
      <DataListItemCells
        className={"''"}
				dataListCells={<div>ReactNode</div>}
				rowid={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
