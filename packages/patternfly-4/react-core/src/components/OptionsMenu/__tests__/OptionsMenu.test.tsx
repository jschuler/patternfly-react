// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { OptionsMenu } from '../OptionsMenu';

describe('OptionsMenu test', () => {
  it('OptionsMenu should match snapshot', () => {
    const view = shallow(
      <OptionsMenu
        className={"''"}
				id={"'defaultString'"}
				menuItems={[]}
				toggle={<p>ReactElement</p>}
				isPlain={undefined}
				isOpen={undefined}
				isText={false}
				isGrouped={false}
				ariaLabelMenu={undefined}
				position={undefined}
				direction={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
