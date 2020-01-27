// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TableBody } from '../Body';
// any missing imports can usually be resolved by adding them here
import { IRow, IExtraRowData, IComputedData, OnRowClick } from '..';

describe('Body test', () => {
  it('Body should match snapshot', () => {
    const view = shallow(
      <TableBody
        className={"''"}
				children={<>ReactNode</>}
				headerData={[]}
				rows={[]}
				rowKey={'id'}
				onRowClick={(event: React.MouseEvent, row: IRow, rowProps: IExtraRowData, computedData: IComputedData) =>
undefined as OnRowClick}
				onRow={(...args: any) => Object}
      />);
    expect(view).toMatchSnapshot();
  });
});
