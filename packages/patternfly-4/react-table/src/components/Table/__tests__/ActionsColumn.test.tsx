// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ActionsColumn } from '../ActionsColumn';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ActionsColumn test', () => {
  it('ActionsColumn should match snapshot', () => {
    const view = shallow(
      <ActionsColumn
        children={<>ReactNode</>}
				items={[]}
				isDisabled={true}
				dropdownPosition={undefined}
				dropdownDirection={undefined}
				rowData={undefined}
				extraData={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
