// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SelectToggle } from '../SelectToggle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('SelectToggle test', () => {
  it('SelectToggle should match snapshot', () => {
    const view = shallow(
      <SelectToggle
        id={"string"}
				children={<div>ReactNode</div>}
				className={"''"}
				isExpanded={false}
				onToggle={() => {}}
				onEnter={() => {}}
				onClose={() => {}}
				handleTypeaheadKeys={(position: string) => undefined as void}
				parentRef={{ current: document.createElement('div') }}
				isFocused={false}
				isHovered={false}
				isActive={false}
				isPlain={false}
				isDisabled={false}
				type={'button'}
				ariaLabelledBy={"''"}
				ariaLabelToggle={"''"}
				variant={'single'}
      />);
    expect(view).toMatchSnapshot();
  });
});
