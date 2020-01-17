// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChipButton } from '../ChipButton';

describe('ChipButton test', () => {
  it('ChipButton should match snapshot', () => {
    const view = shallow(
      <ChipButton
        ariaLabel={"'close'"}
				children={<>ReactNode</>}
				className={"''"}
				onClick={() => undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
