// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Text } from '../Text';

describe('Text test', () => {
  it('Text should match snapshot', () => {
    const view = mount(
      <Text
        component={'h1'}
				children={<>ReactNode</>}
				className={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
