// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { AlertActionCloseButton } from '../AlertActionCloseButton';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('AlertActionCloseButton test', () => {
  it('AlertActionCloseButton should match snapshot', () => {
    const view = shallow(
      <AlertActionCloseButton
        className={"''"}
				onClose={() => undefined as any}
				aria-label={"''"}
				variantLabel={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
