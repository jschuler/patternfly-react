// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../header';

describe('Header test', () => {
  it('Header should match snapshot', () => {
    const view = shallow(
      <Header
        headerRows={undefined}
				children={undefined}
				columns={undefined}
				renderers={undefined}
				onRow={undefined}
				className={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
