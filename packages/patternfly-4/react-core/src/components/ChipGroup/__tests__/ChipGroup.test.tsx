// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChipGroup } from '../ChipGroup';

describe('ChipGroup test', () => {
  it('ChipGroup should match snapshot', () => {
    const view = shallow(
      <ChipGroup
        children={undefined}
				className={"''"}
				defaultIsOpen={false}
				expandedText={"'Show Less'"}
				collapsedText={"'${remaining} more'"}
				withToolbar={false}
				headingLevel={undefined}
				numChips={3}
      />);
    expect(view).toMatchSnapshot();
  });
});
