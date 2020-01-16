// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ProgressBar } from '../ProgressBar';

describe('ProgressBar test', () => {
  it('ProgressBar should match snapshot', () => {
    const view = mount(
      <ProgressBar
        children={<>ReactNode</>}
				className={"''"}
				value={42}
				ariaProps={unrecognizedType AriaProps undefined, consider reporting error to react-jest-test-generator.}
      />);
    expect(view).toMatchSnapshot();
  });
});
