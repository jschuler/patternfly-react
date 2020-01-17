// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from '../Dropdown';

describe('Dropdown test', () => {
  it('Dropdown should match snapshot', () => {
    const view = shallow(
      <Dropdown
        children={undefined}
				className={undefined}
				dropdownItems={undefined}
				isOpen={undefined}
				isPlain={undefined}
				position={undefined}
				direction={undefined}
				isGrouped={undefined}
				toggle={<p>ReactElement</p>}
				onSelect={undefined}
				autoFocus={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
