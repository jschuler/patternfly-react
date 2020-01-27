// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { VerticalTabsTab } from '../VerticalTabsTab';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('VerticalTabsTab test', () => {
  it('VerticalTabsTab should match snapshot', () => {
    const view = shallow(
      <VerticalTabsTab
        children={<>ReactNode</>}
				className={"''"}
				title={null}
				wrapStyle={'wrap'}
				active={false}
				hasActiveDescendant={false}
				shown={false}
				onActivate={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
