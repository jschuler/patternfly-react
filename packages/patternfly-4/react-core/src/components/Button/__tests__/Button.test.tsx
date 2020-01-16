// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Button } from '../Button';

describe('Button test', () => {
  it('Button should match snapshot', () => {
    const view = mount(
      <Button
        children={<>ReactNode</>}
				className={"''"}
				component={'button'}
				isActive={false}
				isBlock={false}
				isDisabled={false}
				isFocus={false}
				isHover={false}
				isInline={false}
				type={'button'}
				variant={'primary'}
				aria-label={"null"}
				icon={null}
				tabIndex={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
