// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Body } from '../body';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Body test', () => {
  it('Body should match snapshot', () => {
    const view = shallow(
      <Body
        onRow={undefined}
				rows={undefined}
				rowKey={undefined}
				columns={undefined}
				renderers={undefined}
				mappedRows={'any'}
				className={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
