// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBox } from '../ModalBox';

describe('ModalBox test', () => {
  it('ModalBox should match snapshot', () => {
    const view = shallow(
      <ModalBox
        children={<div>ReactNode</div>}
				className={"''"}
				isLarge={false}
				isSmall={false}
				title={"'defaultString'"}
				id={"'defaultString'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
