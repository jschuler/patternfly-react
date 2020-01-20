// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { BodyRow } from '../body-row';

describe('BodyRow test', () => {
  it('BodyRow should match snapshot', () => {
    const view = shallow(
      <BodyRow
        columns={[]/*unrecognizedType ColumnsType undefined*/}
				renderers={{}/*unrecognizedType RendererType undefined*/}
				onRow={(...args: any) => Object}
				rowIndex={42}
				rowData={{}/*unrecognizedType RowType undefined*/}
				rowKey={"'defaultString'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
