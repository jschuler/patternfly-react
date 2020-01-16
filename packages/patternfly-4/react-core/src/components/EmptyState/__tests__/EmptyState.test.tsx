// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { EmptyState } from '../EmptyState';

describe('EmptyState test', () => {
  it('EmptyState should match snapshot', () => {
    const view = mount(
      <EmptyState
        className={"''"}
				children={<>ReactNode</>}
				variant={'small'}
      />);
    expect(view).toMatchSnapshot();
  });
});
