// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../Nav';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Nav test', () => {
  it('Nav should match snapshot', () => {
    const view = shallow(
      <Nav
        children={<>ReactNode</>}
				className={"''"}
				onSelect={() => undefined}
				onToggle={() => undefined}
				aria-label={"''"}
				theme={'light'}
      />);
    expect(view).toMatchSnapshot();
  });
});
