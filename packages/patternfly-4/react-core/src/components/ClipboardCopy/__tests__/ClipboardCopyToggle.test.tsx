// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ClipboardCopyToggle } from '../ClipboardCopyToggle';

describe('ClipboardCopyToggle test', () => {
  it('ClipboardCopyToggle should match snapshot', () => {
    const view = mount(
      <ClipboardCopyToggle
        onClick={(event: React.MouseEvent) => void}
				id={"'defaultString'"}
				textId={"'defaultString'"}
				contentId={"'defaultString'"}
				isExpanded={false}
				className={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
