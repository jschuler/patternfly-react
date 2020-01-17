// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SelectToggle } from '../SelectToggle';

describe('SelectToggle test', () => {
  it('SelectToggle should match snapshot', () => {
    const view = shallow(
      <SelectToggle
        id={"'defaultString'"}
				children={<div>ReactNode</div>}
				className={"''"}
				isExpanded={false}
				onToggle={() => {}}
				onEnter={() => {}}
				onClose={() => {}}
				handleTypeaheadKeys={undefined}
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
