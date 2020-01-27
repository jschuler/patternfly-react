// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModalBoxCloseButton } from '../AboutModalBoxCloseButton';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('AboutModalBoxCloseButton test', () => {
  it('AboutModalBoxCloseButton should match snapshot', () => {
    const view = shallow(
      <AboutModalBoxCloseButton
        className={"''"}
				onClose={() => undefined as any}
      />);
    expect(view).toMatchSnapshot();
  });
});
