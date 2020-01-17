// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ClipboardCopyToggle } from '../ClipboardCopyToggle';

describe('ClipboardCopyToggle test', () => {
  it('ClipboardCopyToggle should match snapshot', () => {
    const view = shallow(
      <ClipboardCopyToggle
        onClick={(event: React.MouseEvent) => undefined as void}
				id={"'defaultString'"}
				textId={"'defaultString'"}
				contentId={"'defaultString'"}
				isExpanded={false}
				className={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
