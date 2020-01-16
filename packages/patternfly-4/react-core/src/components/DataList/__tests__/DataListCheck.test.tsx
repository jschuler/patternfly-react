// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { DataListCheck } from '../DataListCheck';

describe('DataListCheck test', () => {
  it('DataListCheck should match snapshot', () => {
    const view = mount(
      <DataListCheck
        className={"''"}
				isValid={true}
				isDisabled={false}
				isChecked={null}
				checked={null}
				onChange={(checked: boolean, event: React.FormEvent<HTMLInputElement>) => {}}
				aria-labelledby={"'defaultString'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
