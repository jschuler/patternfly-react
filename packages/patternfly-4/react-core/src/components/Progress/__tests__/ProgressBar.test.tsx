// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ProgressBar } from '../ProgressBar';

describe('ProgressBar test', () => {
  it('ProgressBar should match snapshot', () => {
    const view = shallow(
      <ProgressBar
        children={<>ReactNode</>}
				className={"''"}
				value={42}
				ariaProps={{}}
      />);
    expect(view).toMatchSnapshot();
  });
});
