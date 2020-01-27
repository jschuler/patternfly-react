// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TopologySideBar } from '../TopologySideBar';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('TopologySideBar test', () => {
  it('TopologySideBar should match snapshot', () => {
    const view = shallow(
      <TopologySideBar
        className={"string"}
				children={<div>ReactNode</div>}
				show={true}
				onClose={() => undefined as void}
				header={<div>ReactNode</div>}
      />);
    expect(view).toMatchSnapshot();
  });
});
