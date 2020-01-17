// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PageSidebar } from '../PageSidebar';

describe('PageSidebar test', () => {
  it('PageSidebar should match snapshot', () => {
    const view = shallow(
      <PageSidebar
        className={"''"}
				nav={undefined}
				isManagedSidebar={undefined}
				isNavOpen={true}
				theme={'light'}
      />);
    expect(view).toMatchSnapshot();
  });
});
