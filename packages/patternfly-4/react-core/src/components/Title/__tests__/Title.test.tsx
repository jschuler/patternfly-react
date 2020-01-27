// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Title } from '../Title';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Title test', () => {
  it('Title should match snapshot', () => {
    const view = shallow(
      <Title
        size={'xs'}
				children={''}
				className={"''"}
				headingLevel={'h1'}
      />);
    expect(view).toMatchSnapshot();
  });
});
