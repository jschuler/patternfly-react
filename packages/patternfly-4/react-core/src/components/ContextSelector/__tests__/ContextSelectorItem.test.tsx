// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ContextSelectorItem } from '../ContextSelectorItem';

describe('ContextSelectorItem test', () => {
  it('ContextSelectorItem should match snapshot', () => {
    const view = mount(
      <ContextSelectorItem
        children={<>ReactNode</>}
				className={"''"}
				isDisabled={false}
				isHovered={false}
				onClick={(): any => undefined}
				index={string}
				sendRef={() => {}}
      />);
    expect(view).toMatchSnapshot();
  });
});
