// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Title } from '../Title';

describe('Title test', () => {
  it('Title should match snapshot', () => {
    const view = shallow(
      <Title
        size={'xs'}
				children={<>ReactNode</>}
				className={"''"}
				headingLevel={'h1'}
      />);
    expect(view).toMatchSnapshot();
  });
});
