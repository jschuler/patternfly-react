// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Nav } from '../Nav';

describe('Nav test', () => {
  it('Nav should match snapshot', () => {
    const view = mount(
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
