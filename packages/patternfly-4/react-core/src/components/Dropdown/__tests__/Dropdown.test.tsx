// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from '../Dropdown';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Dropdown test', () => {
  it('Dropdown should match snapshot', () => {
    const view = shallow(
      <Dropdown
        children={<div>ReactNode</div>}
				className={"string"}
				dropdownItems={[]}
				isOpen={true}
				isPlain={true}
				position={'right'}
				direction={'up'}
				isGrouped={true}
				toggle={<p>ReactElement</p>}
				onSelect={(event?: React.SyntheticEvent<HTMLDivElement>) => undefined as void}
				autoFocus={true}
      />);
    expect(view).toMatchSnapshot();
  });
});
