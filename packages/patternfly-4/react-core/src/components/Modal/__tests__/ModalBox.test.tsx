// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBox } from '../ModalBox';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ModalBox test', () => {
  it('ModalBox should match snapshot', () => {
    const view = shallow(
      <ModalBox
        children={<div>ReactNode</div>}
				className={"''"}
				isLarge={false}
				isSmall={false}
				title={"string"}
				id={"string"}
      />);
    expect(view).toMatchSnapshot();
  });
});
