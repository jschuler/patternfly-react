// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../header';
// any missing imports can usually be resolved by adding them here
import { RowsType } from '..';

describe('Header test', () => {
  it('Header should match snapshot', () => {
    const view = shallow(
      <Header
        headerRows={[undefined as RowsType]}
				children={<div>ReactNode</div>}
				columns={undefined}
				renderers={undefined}
				onRow={undefined}
				className={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
