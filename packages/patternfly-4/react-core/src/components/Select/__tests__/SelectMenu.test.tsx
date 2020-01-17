// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SelectMenu } from '../SelectMenu';

describe('SelectMenu test', () => {
  it('SelectMenu should match snapshot', () => {
    const view = shallow(
      <SelectMenu
        children={'string'}
				isCustomContent={false}
				className={"''"}
				isExpanded={false}
				isGrouped={false}
				selected={''}
				checked={undefined}
				openedOnEnter={false}
				maxHeight={''}
				noResultsFoundText={undefined}
				createText={undefined}
				sendRef={() => {}}
				keyHandler={() => {}}
      />);
    expect(view).toMatchSnapshot();
  });
});
