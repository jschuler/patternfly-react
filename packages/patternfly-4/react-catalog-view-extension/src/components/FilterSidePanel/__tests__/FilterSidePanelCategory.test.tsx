// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { FilterSidePanelCategory } from '../FilterSidePanelCategory';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('FilterSidePanelCategory test', () => {
  it('FilterSidePanelCategory should match snapshot', () => {
    const view = shallow(
      <FilterSidePanelCategory
        children={<>ReactNode</>}
				className={"''"}
				title={null}
				maxShowCount={5}
				leeway={2}
				showAll={false}
				onShowAllToggle={() => null}
				showText={"null"}
				hideText={"null"}
      />);
    expect(view).toMatchSnapshot();
  });
});
