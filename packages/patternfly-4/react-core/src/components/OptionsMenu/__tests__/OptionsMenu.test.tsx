// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { OptionsMenu } from '../OptionsMenu';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('OptionsMenu test', () => {
  it('OptionsMenu should match snapshot', () => {
    const view = shallow(
      <OptionsMenu
        className={"''"}
				id={"string"}
				menuItems={[]}
				toggle={<p>ReactElement</p>}
				isPlain={true}
				isOpen={true}
				isText={false}
				isGrouped={false}
				ariaLabelMenu={"string"}
				position={'right'}
				direction={'up'}
      />);
    expect(view).toMatchSnapshot();
  });
});
