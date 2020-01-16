// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Tabs } from '../Tabs';

describe('Tabs test', () => {
  it('Tabs should match snapshot', () => {
    const view = mount(
      <Tabs
        children={<>ReactNode</>}
				className={"''"}
				activeKey={0}
				onSelect={() => undefined as any}
				id={undefined}
				isFilled={false}
				isSecondary={false}
				leftScrollAriaLabel={"'Scroll left'"}
				rightScrollAriaLabel={"'Scroll right'"}
				variant={'div'}
				aria-label={undefined}
				mountOnEnter={false}
				unmountOnExit={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
