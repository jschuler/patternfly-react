// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { EmptyStateIcon } from '../EmptyStateIcon';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('EmptyStateIcon test', () => {
  it('EmptyStateIcon should match snapshot', () => {
    const view = shallow(
      <EmptyStateIcon
        color={"string"}
				size={'sm'}
				title={"string"}
				className={"''"}
				icon={null}
				component={null}
				variant={'icon'}
      />);
    expect(view).toMatchSnapshot();
  });
});
