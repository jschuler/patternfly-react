// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataList } from '../DataList';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('DataList test', () => {
  it('DataList should match snapshot', () => {
    const view = shallow(
      <DataList
        children={<>ReactNode</>}
				className={"''"}
				aria-label={"string"}
				onSelectDataListItem={(id: string) => undefined as void}
				selectedDataListItemId={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
