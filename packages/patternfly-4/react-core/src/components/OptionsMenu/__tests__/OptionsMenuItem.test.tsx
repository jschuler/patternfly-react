// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { OptionsMenuItem } from '../OptionsMenuItem';

describe('OptionsMenuItem test', () => {
  it('OptionsMenuItem should match snapshot', () => {
    const view = mount(
      <OptionsMenuItem
        children={<>ReactNode</>}
				className={undefined}
				isSelected={false}
				isDisabled={undefined}
				onSelect={() => null as any}
				id={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
