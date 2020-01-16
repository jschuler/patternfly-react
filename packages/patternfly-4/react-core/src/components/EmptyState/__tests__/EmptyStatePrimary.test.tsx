// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { EmptyStatePrimary } from '../EmptyStatePrimary';

describe('EmptyStatePrimary test', () => {
  it('EmptyStatePrimary should match snapshot', () => {
    const view = mount(
      <EmptyStatePrimary
        className={"''"}
				children={<>ReactNode</>}
      />);
    expect(view).toMatchSnapshot();
  });
});
