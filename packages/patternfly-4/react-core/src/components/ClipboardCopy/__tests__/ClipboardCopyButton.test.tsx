// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ClipboardCopyButton } from '../ClipboardCopyButton';

describe('ClipboardCopyButton test', () => {
  it('ClipboardCopyButton should match snapshot', () => {
    const view = mount(
      <ClipboardCopyButton
        onClick={(event: React.MouseEvent) => void}
				children={<>ReactNode</>}
				id={"'defaultString'"}
				textId={"'defaultString'"}
				className={"''"}
				exitDelay={100}
				entryDelay={100}
				maxWidth={"'100px'"}
				position={'top'}
				aria-label={"'Copyable input'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
