// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataListItem } from '../DataListItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataListItem test', () => {
  it('DataListItem should match snapshot', () => {
    const view = shallow(
      <DataListItem
        isExpanded={false}
				children={<div>ReactNode</div>}
				className={"''"}
				aria-labelledby={"string"}
				id={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
