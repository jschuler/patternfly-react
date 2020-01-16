// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { SelectToggle } from '../SelectToggle';

describe('SelectToggle test', () => {
  it('SelectToggle should match snapshot', () => {
    const view = mount(
      <SelectToggle
        id={"'defaultString'"}
				children={<>ReactNode</>}
				className={"''"}
				isExpanded={false}
				onToggle={() => {}}
				onEnter={() => {}}
				onClose={() => {}}
				handleTypeaheadKeys={undefined}
				parentRef={unrecognizedType ReactRefObject undefined, consider reporting error to react-jest-test-generator.}
				isFocused={false}
				isHovered={false}
				isActive={false}
				isPlain={false}
				isDisabled={false}
				type={'button'}
				ariaLabelledBy={"''"}
				ariaLabelToggle={"''"}
				variant={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
