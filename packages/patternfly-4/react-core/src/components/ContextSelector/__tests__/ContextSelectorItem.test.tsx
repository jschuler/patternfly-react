// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ContextSelectorItem } from '../ContextSelectorItem';

describe('ContextSelectorItem test', () => {
  it('ContextSelectorItem should match snapshot', () => {
    const view = shallow(
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
