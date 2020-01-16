// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { DataList } from '../DataList';

describe('DataList test', () => {
  it('DataList should match snapshot', () => {
    const view = mount(
      <DataList
        children={<>ReactNode</>}
				className={"''"}
				aria-label={"'defaultString'"}
				onSelectDataListItem={undefined}
				selectedDataListItemId={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
