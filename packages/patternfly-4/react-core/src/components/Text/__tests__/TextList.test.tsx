// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { TextList } from '../TextList';

describe('TextList test', () => {
  it('TextList should match snapshot', () => {
    const view = mount(
      <TextList
        children={<>ReactNode</>}
				className={"''"}
				component={'ul'}
      />);
    expect(view).toMatchSnapshot();
  });
});
