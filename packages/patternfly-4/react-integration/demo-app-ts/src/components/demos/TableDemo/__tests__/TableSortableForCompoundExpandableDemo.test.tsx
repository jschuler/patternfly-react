// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TableSortableForCompoundExpandableDemo } from '../TableSortableForCompoundExpandableDemo';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('TableSortableForCompoundExpandableDemo test', () => {
  it('TableSortableForCompoundExpandableDemo should match snapshot', () => {
    const view = shallow(
      <TableSortableForCompoundExpandableDemo
        firstColumnRows={[]}
				columns={[]}
				rows={[]}
				sortBy={undefined}
				id={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
