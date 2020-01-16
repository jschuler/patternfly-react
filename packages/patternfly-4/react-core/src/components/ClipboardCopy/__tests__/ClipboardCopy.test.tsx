// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ClipboardCopy } from '../ClipboardCopy';

describe('ClipboardCopy test', () => {
  it('ClipboardCopy should match snapshot', () => {
    const view = mount(
      <ClipboardCopy
        className={undefined}
				hoverTip={"'Copy to clipboard'"}
				clickTip={"'Successfully copied to clipboard!'"}
				textAriaLabel={"'Copyable input'"}
				toggleAriaLabel={"'Show content'"}
				isReadOnly={false}
				isExpanded={false}
				isCode={false}
				variant={'inline'}
				position={'auto'}
				maxWidth={"'150px'"}
				exitDelay={1600}
				entryDelay={100}
				switchDelay={2000}
				onCopy={(event: any, text: string) => {
  const clipboard = event.currentTarget.parentElement;
  const el = document.createElement('input');
  el.value = text;
  clipboard.appendChild(el);
  el.select();
  document.execCommand('copy');
  clipboard.removeChild(el);
}}
				onChange={(): any => undefined}
				children={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
