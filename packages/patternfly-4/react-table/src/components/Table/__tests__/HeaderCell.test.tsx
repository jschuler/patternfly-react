// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { HeaderCell } from '../HeaderCell';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('HeaderCell test', () => {
  it('HeaderCell should match snapshot', () => {
    const view = shallow(
      <HeaderCell
        data-label={"string"}
				className={"''"}
				component={'th'}
				isVisible={true}
				scope={"''"}
				textCenter={false}
				dataLabel={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
