// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../Button';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Button test', () => {
  it('Button should match snapshot', () => {
    const view = shallow(
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
