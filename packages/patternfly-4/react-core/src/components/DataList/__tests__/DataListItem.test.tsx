// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { DataListItem } from '../DataListItem';

describe('DataListItem test', () => {
  it('DataListItem should match snapshot', () => {
    const view = mount(
      <DataListItem
        isExpanded={false}
				children={<>ReactNode</>}
				className={"''"}
				aria-labelledby={"'defaultString'"}
				id={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
