// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ClipboardCopyExpanded } from '../ClipboardCopyExpanded';

describe('ClipboardCopyExpanded test', () => {
  it('ClipboardCopyExpanded should match snapshot', () => {
    const view = mount(
      <ClipboardCopyExpanded
        className={"''"}
				children={<>ReactNode</>}
				onChange={(): any => undefined}
				isReadOnly={false}
				isCode={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
