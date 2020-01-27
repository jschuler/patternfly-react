// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Tabs } from '../Tabs';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Tabs test', () => {
  it('Tabs should match snapshot', () => {
    const view = shallow(
      <Tabs
        children={<div>ReactNode</div>}
				className={"''"}
				activeKey={0}
				onSelect={() => undefined as any}
				id={"string"}
				isFilled={false}
				isSecondary={false}
				leftScrollAriaLabel={"'Scroll left'"}
				rightScrollAriaLabel={"'Scroll right'"}
				variant={'div'}
				aria-label={"string"}
				mountOnEnter={false}
				unmountOnExit={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
