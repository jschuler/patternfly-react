// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { EmptyStatePrimary } from '../EmptyStatePrimary';

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
