// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ModalBoxCloseButton } from '../ModalBoxCloseButton';

describe('ModalBoxCloseButton test', () => {
  it('ModalBoxCloseButton should match snapshot', () => {
    const view = mount(
      <ModalBoxCloseButton
        className={"''"}
				onClose={() => undefined as any}
      />);
    expect(view).toMatchSnapshot();
  });
});
