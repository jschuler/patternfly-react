// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TextListItem } from '../TextListItem';

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
