// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { PopoverCloseButton } from '../PopoverCloseButton';

describe('PopoverCloseButton test', () => {
  it('PopoverCloseButton should match snapshot', () => {
    const view = mount(
      <PopoverCloseButton
        onClose={"() => undefined as void"}
      />);
    expect(view).toMatchSnapshot();
  });
});
