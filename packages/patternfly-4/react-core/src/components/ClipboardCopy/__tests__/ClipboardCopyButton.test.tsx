// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ClipboardCopyButton } from '../ClipboardCopyButton';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ClipboardCopyButton test', () => {
  it('ClipboardCopyButton should match snapshot', () => {
    const view = shallow(
      <ClipboardCopyButton
        onClick={(event: React.MouseEvent) => undefined as void}
				children={<div>ReactNode</div>}
				id={"string"}
				textId={"string"}
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
