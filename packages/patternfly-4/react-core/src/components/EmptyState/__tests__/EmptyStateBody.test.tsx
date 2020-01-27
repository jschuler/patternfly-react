// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { EmptyStateBody } from '../EmptyStateBody';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('EmptyStateBody test', () => {
  it('EmptyStateBody should match snapshot', () => {
    const view = shallow(
      <EmptyStateBody
        children={<div>ReactNode</div>}
				className={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
