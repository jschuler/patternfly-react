// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TooltipContent } from '../TooltipContent';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('TooltipContent test', () => {
  it('TooltipContent should match snapshot', () => {
    const view = shallow(
      <TooltipContent
        className={"string"}
				children={<div>ReactNode</div>}
				isLeftAligned={true}
      />);
    expect(view).toMatchSnapshot();
  });
});
