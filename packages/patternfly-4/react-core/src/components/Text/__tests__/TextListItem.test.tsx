// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TextListItem } from '../TextListItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('TextListItem test', () => {
  it('TextListItem should match snapshot', () => {
    const view = shallow(
      <TextListItem
        children={<>ReactNode</>}
				className={"''"}
				component={'li'}
      />);
    expect(view).toMatchSnapshot();
  });
});
