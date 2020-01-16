// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { SkipToContent } from '../SkipToContent';

describe('SkipToContent test', () => {
  it('SkipToContent should match snapshot', () => {
    const view = mount(
      <SkipToContent
        component={'a'}
				href={"'defaultString'"}
				children={undefined}
				className={"''"}
				show={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
