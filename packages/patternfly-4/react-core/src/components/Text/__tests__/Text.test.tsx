// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Text } from '../Text';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Text test', () => {
  it('Text should match snapshot', () => {
    const view = shallow(
      <Text
        component={'h1'}
				children={<>ReactNode</>}
				className={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
