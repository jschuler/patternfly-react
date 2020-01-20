// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SortColumn } from '../SortColumn';

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
