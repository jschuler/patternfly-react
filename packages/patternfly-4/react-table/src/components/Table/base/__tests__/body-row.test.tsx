// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { BodyRow } from '../body-row';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('BodyRow test', () => {
  it('BodyRow should match snapshot', () => {
    const view = shallow(
      <BodyRow
        columns={undefined}
				renderers={undefined}
				onRow={(...args: any) => Object}
				rowIndex={42}
				rowData={undefined}
				rowKey={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
