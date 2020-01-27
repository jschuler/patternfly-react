// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { CollapseColumn } from '../CollapseColumn';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('CollapseColumn test', () => {
  it('CollapseColumn should match snapshot', () => {
    const view = shallow(
      <CollapseColumn
        id={"string"}
				className={"''"}
				children={<>ReactNode</>}
				onToggle={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => undefined as void}
				isOpen={true}
      />);
    expect(view).toMatchSnapshot();
  });
});
