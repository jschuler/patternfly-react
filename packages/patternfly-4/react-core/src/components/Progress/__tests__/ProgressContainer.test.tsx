// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ProgressContainer } from '../ProgressContainer';

describe('ProgressContainer test', () => {
  it('ProgressContainer should match snapshot', () => {
    const view = mount(
      <ProgressContainer
        ariaProps={unrecognizedType AriaProps undefined, consider reporting error to react-jest-test-generator.}
				parentId={"'defaultString'"}
				title={"''"}
				label={null}
				variant={'danger'}
				measureLocation={'outside'}
				value={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
