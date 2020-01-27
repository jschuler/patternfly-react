// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SortColumn } from '../SortColumn';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('SortColumn test', () => {
  it('SortColumn should match snapshot', () => {
    const view = shallow(
      <SortColumn
        children={<>ReactNode</>}
				className={"''"}
				isSortedBy={false}
				onSort={null}
				sortDirection={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
