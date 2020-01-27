// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { BodyCell } from '../BodyCell';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('BodyCell test', () => {
  it('BodyCell should match snapshot', () => {
    const view = shallow(
      <BodyCell
        data-label={"''"}
				className={"''"}
				colSpan={42}
				component={'td'}
				isVisible={true}
				parentId={42}
				textCenter={false}
				isOpen={true}
				ariaControls={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
