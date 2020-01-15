
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import * as React from 'react';
import { mount } from 'enzyme';
import { AlertActionCloseButton } from '../AlertActionCloseButton';


describe('AlertActionCloseButton test', () => {
  it('AlertActionCloseButton should match snapshot', () => {
    const view = mount(
      <AlertActionCloseButton
        className={"''"}
				onClose={() => undefined as any}
				aria-label={"''"}
				variantLabel={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
