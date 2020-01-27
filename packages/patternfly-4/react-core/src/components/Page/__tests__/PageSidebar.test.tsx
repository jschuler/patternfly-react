// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PageSidebar } from '../PageSidebar';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('PageSidebar test', () => {
  it('PageSidebar should match snapshot', () => {
    const view = shallow(
      <PageSidebar
        className={"''"}
				nav={<div>ReactNode</div>}
				isManagedSidebar={true}
				isNavOpen={true}
				theme={'light'}
      />);
    expect(view).toMatchSnapshot();
  });
});
