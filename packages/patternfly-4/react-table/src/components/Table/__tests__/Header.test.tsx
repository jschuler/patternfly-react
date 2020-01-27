// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TableHeader } from '../Header';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Header test', () => {
  it('Header should match snapshot', () => {
    const view = shallow(
      <TableHeader
        className={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
