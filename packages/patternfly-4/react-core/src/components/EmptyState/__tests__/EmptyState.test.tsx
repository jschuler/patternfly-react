// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { EmptyState } from '../EmptyState';

describe('EmptyState test', () => {
  it('EmptyState should match snapshot', () => {
    const view = shallow(
      <EmptyState
        className={"''"}
				children={<div>ReactNode</div>}
				variant={'small'}
      />);
    expect(view).toMatchSnapshot();
  });
});
