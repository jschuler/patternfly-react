// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataListCheck } from '../DataListCheck';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataListCheck test', () => {
  it('DataListCheck should match snapshot', () => {
    const view = shallow(
      <DataListCheck
        className={"''"}
				isValid={true}
				isDisabled={false}
				isChecked={null}
				checked={null}
				onChange={(checked: boolean, event: React.FormEvent<HTMLInputElement>) => {}}
				aria-labelledby={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
