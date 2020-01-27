// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBoxHeader } from '../ModalBoxHeader';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ModalBoxHeader test', () => {
  it('ModalBoxHeader should match snapshot', () => {
    const view = shallow(
      <ModalBoxHeader
        children={<>ReactNode</>}
				className={"''"}
				hideTitle={false}
				headingLevel={'h1'}
      />);
    expect(view).toMatchSnapshot();
  });
});
