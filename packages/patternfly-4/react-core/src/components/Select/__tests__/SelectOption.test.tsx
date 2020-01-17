// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SelectOption } from '../SelectOption';

describe('SelectOption test', () => {
  it('SelectOption should match snapshot', () => {
    const view = shallow(
      <SelectOption
        children={undefined}
				className={"''"}
				index={0}
				component={'button'}
				value={''}
				isDisabled={false}
				isPlaceholder={false}
				isSelected={false}
				isChecked={false}
				isFocused={false}
				sendRef={() => {}}
				keyHandler={() => {}}
				onClick={() => {}}
      />);
    expect(view).toMatchSnapshot();
  });
});
