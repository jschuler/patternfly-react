// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SelectColumn } from '../SelectColumn';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('SelectColumn test', () => {
  it('SelectColumn should match snapshot', () => {
    const view = shallow(
      <SelectColumn
        name={"string"}
				children={<>ReactNode</>}
				className={"''"}
				onSelect={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
