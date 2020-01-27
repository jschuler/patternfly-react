// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataListContent } from '../DataListContent';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataListContent test', () => {
  it('DataListContent should match snapshot', () => {
    const view = shallow(
      <DataListContent
        children={<>ReactNode</>}
				className={"''"}
				id={"''"}
				rowid={"''"}
				isHidden={false}
				noPadding={false}
				aria-label={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
