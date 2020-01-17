// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TextList } from '../TextList';

describe('TextList test', () => {
  it('TextList should match snapshot', () => {
    const view = shallow(
      <TextList
        children={<>ReactNode</>}
				className={"''"}
				component={'ul'}
      />);
    expect(view).toMatchSnapshot();
  });
});
