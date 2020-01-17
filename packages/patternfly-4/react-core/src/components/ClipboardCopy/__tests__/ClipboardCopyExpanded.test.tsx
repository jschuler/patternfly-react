// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ClipboardCopyExpanded } from '../ClipboardCopyExpanded';

describe('ClipboardCopyExpanded test', () => {
  it('ClipboardCopyExpanded should match snapshot', () => {
    const view = shallow(
      <ClipboardCopyExpanded
        className={"''"}
				children={<div>ReactNode</div>}
				onChange={(): any => undefined}
				isReadOnly={false}
				isCode={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
