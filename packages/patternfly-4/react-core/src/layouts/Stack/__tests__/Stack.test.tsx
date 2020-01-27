// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Stack } from '../Stack';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Stack test', () => {
  it('Stack should match snapshot', () => {
    const view = shallow(
      <Stack
        gutter={null}
				children={<>ReactNode</>}
				className={"''"}
				component={'div'}
      />);
    expect(view).toMatchSnapshot();
  });
});
