// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TooltipContent } from '../TooltipContent';

describe('TooltipContent test', () => {
  it('TooltipContent should match snapshot', () => {
    const view = shallow(
      <TooltipContent
        className={undefined}
				children={<div>ReactNode</div>}
				isLeftAligned={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
