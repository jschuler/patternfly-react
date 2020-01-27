// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumb } from '../Breadcrumb';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Breadcrumb test', () => {
  it('Breadcrumb should match snapshot', () => {
    const view = shallow(
      <Breadcrumb
        children={<>ReactNode</>}
				className={"''"}
				aria-label={"'Breadcrumb'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
