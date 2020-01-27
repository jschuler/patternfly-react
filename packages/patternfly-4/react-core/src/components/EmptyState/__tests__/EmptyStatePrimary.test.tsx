// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { EmptyStatePrimary } from '../EmptyStatePrimary';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('EmptyStatePrimary test', () => {
  it('EmptyStatePrimary should match snapshot', () => {
    const view = shallow(
      <EmptyStatePrimary
        className={"''"}
				children={<div>ReactNode</div>}
      />);
    expect(view).toMatchSnapshot();
  });
});
