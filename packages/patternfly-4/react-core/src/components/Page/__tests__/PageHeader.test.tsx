// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PageHeader } from '../PageHeader';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('PageHeader test', () => {
  it('PageHeader should match snapshot', () => {
    const view = shallow(
      <PageHeader
        className={"''"}
				logo={null}
				logoProps={null}
				logoComponent={'a'}
				toolbar={null}
				avatar={null}
				topNav={null}
				showNavToggle={false}
				isNavOpen={true}
				isManagedSidebar={true}
				onNavToggle={() => undefined as any}
				aria-label={"'Global navigation'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
