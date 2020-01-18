// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Progress } from '../Progress';

describe('Progress test', () => {
  it('Progress should match snapshot', () => {
    const view = shallow(
      <Progress
        className={"''"}
				size={null}
				measureLocation={'outside'}
				variant={'danger'}
				title={"''"}
				label={<>ReactNode</>}
				value={0}
				id={"''"}
				min={0}
				max={100}
				valueText={"null"}
      />);
    expect(view).toMatchSnapshot();
  });
});
