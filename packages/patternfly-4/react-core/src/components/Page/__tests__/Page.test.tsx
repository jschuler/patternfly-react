// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Page } from '../Page';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Page test', () => {
  it('Page should match snapshot', () => {
    const view = shallow(
      <Page
        children={<>ReactNode</>}
				className={"''"}
				header={null}
				sidebar={null}
				skipToContent={null}
				mainContainerId={"null"}
				isManagedSidebar={false}
				defaultManagedSidebarIsOpen={true}
				onPageResize={(): void => null}
				breadcrumb={null}
				mainAriaLabel={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
