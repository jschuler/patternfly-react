// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ModalBoxHeader } from '../ModalBoxHeader';

describe('ModalBoxHeader test', () => {
  it('ModalBoxHeader should match snapshot', () => {
    const view = mount(
      <ModalBoxHeader
        children={<>ReactNode</>}
				className={"''"}
				hideTitle={false}
				headingLevel={'h1'}
      />);
    expect(view).toMatchSnapshot();
  });
});
