// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ProgressBar } from '../ProgressBar';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ProgressBar test', () => {
  it('ProgressBar should match snapshot', () => {
    const view = shallow(
      <ProgressBar
        children={<>ReactNode</>}
				className={"''"}
				value={42}
				ariaProps={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
