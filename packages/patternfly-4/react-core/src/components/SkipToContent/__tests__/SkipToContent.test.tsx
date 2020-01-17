// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SkipToContent } from '../SkipToContent';

describe('SkipToContent test', () => {
  it('SkipToContent should match snapshot', () => {
    const view = shallow(
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
