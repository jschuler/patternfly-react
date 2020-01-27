// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataListCell } from '../DataListCell';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataListCell test', () => {
  it('DataListCell should match snapshot', () => {
    const view = shallow(
      <DataListCell
        children={<>ReactNode</>}
				className={"''"}
				width={1}
				isFilled={true}
				alignRight={false}
				isIcon={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
