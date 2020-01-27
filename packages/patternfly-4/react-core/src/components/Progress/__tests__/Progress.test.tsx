// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Progress } from '../Progress';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Progress test', () => {
  it('Progress should match snapshot', () => {
    const view = shallow(
      <Progress
        className={"''"}
				size={null}
				measureLocation={'outside'}
				variant={'danger'}
				title={"''"}
				label={null}
				value={0}
				id={"''"}
				min={0}
				max={100}
				valueText={"null"}
      />);
    expect(view).toMatchSnapshot();
  });
});
