// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ContextSelector } from '../ContextSelector';

describe('ContextSelector test', () => {
  it('ContextSelector should match snapshot', () => {
    const view = mount(
      <ContextSelector
        children={<>ReactNode</>}
				className={"''"}
				isOpen={false}
				onToggle={() => undefined as any}
				onSelect={() => undefined as any}
				screenReaderLabel={"''"}
				toggleText={"''"}
				searchButtonAriaLabel={"'Search menu items'"}
				searchInputValue={"''"}
				onSearchInputChange={() => undefined as any}
				searchInputPlaceholder={"'Search'"}
				onSearchButtonClick={() => undefined as any}
      />);
    expect(view).toMatchSnapshot();
  });
});
