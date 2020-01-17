// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataListCheck } from '../DataListCheck';

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
				aria-labelledby={"'defaultString'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
