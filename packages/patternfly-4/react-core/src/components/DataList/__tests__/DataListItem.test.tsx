// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataListItem } from '../DataListItem';

describe('DataListItem test', () => {
  it('DataListItem should match snapshot', () => {
    const view = shallow(
      <DataListItem
        isExpanded={false}
				children={<div>ReactNode</div>}
				className={"''"}
				aria-labelledby={"'defaultString'"}
				id={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
