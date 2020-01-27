// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SkipToContent } from '../SkipToContent';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('SkipToContent test', () => {
  it('SkipToContent should match snapshot', () => {
    const view = shallow(
      <SkipToContent
        component={'a'}
				href={"string"}
				children={<div>ReactNode</div>}
				className={"''"}
				show={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
