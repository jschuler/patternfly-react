// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModalBoxContent } from '../AboutModalBoxContent';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('AboutModalBoxContent test', () => {
  it('AboutModalBoxContent should match snapshot', () => {
    const view = shallow(
      <AboutModalBoxContent
        children={<div>ReactNode</div>}
				className={"''"}
				id={"string"}
				trademark={"string"}
				noAboutModalBoxContentContainer={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
