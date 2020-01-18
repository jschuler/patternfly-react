// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PageHeader } from '../PageHeader';

describe('PageHeader test', () => {
  it('PageHeader should match snapshot', () => {
    const view = shallow(
      <PageHeader
        className={"''"}
				logo={<>ReactNode</>}
				logoProps={null}
				logoComponent={<>ReactNode</>}
				toolbar={<>ReactNode</>}
				avatar={<>ReactNode</>}
				topNav={<>ReactNode</>}
				showNavToggle={false}
				isNavOpen={true}
				isManagedSidebar={undefined}
				onNavToggle={() => undefined as any}
				aria-label={"'Global navigation'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
