// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TableBody } from '../Body';

describe('TableBody test', () => {
  it('TableBody should match snapshot', () => {
    const view = shallow(
      <TableBody
        className={"''"}
				children={<>ReactNode</>}
				headerData={undefined}
				rows={undefined}
				rowKey={'id'}
				onRowClick={() => {}}
				onRow={(...args: any) => Object}
      />);
    expect(view).toMatchSnapshot();
  });
});
