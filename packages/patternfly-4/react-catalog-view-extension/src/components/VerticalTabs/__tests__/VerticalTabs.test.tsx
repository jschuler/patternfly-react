// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { VerticalTabs } from '../VerticalTabs';

describe('VerticalTabs test', () => {
  it('VerticalTabs should match snapshot', () => {
    const view = shallow(
      <VerticalTabs
        children={<>ReactNode</>}
				className={"''"}
				restrictTabs={false}
				activeTab={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
