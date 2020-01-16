// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ModalBox } from '../ModalBox';

describe('ModalBox test', () => {
  it('ModalBox should match snapshot', () => {
    const view = mount(
      <ModalBox
        children={<>ReactNode</>}
				className={"''"}
				isLarge={false}
				isSmall={false}
				title={"'defaultString'"}
				id={"'defaultString'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
