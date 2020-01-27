// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { FilterSidePanelCategoryItem } from '../FilterSidePanelCategoryItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('FilterSidePanelCategoryItem test', () => {
  it('FilterSidePanelCategoryItem should match snapshot', () => {
    const view = shallow(
      <FilterSidePanelCategoryItem
        children={<>ReactNode</>}
				className={"''"}
				icon={null}
				count={null}
				onClick={null}
				checked={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
