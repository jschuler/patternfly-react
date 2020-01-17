// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ProgressContainer } from '../ProgressContainer';

describe('ProgressContainer test', () => {
  it('ProgressContainer should match snapshot', () => {
    const view = shallow(
      <ProgressContainer
        ariaProps={{}}
				parentId={"'defaultString'"}
				title={"''"}
				label={null}
				variant={'danger'}
				measureLocation={'outside'}
				value={42}
      />);
    expect(view).toMatchSnapshot();
  });
});
