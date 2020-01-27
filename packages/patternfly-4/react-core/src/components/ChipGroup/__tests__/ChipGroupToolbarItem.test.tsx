// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ChipGroupToolbarItem } from '../ChipGroupToolbarItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ChipGroupToolbarItem test', () => {
  it('ChipGroupToolbarItem should match snapshot', () => {
    const view = shallow(
      <ChipGroupToolbarItem
        categoryName={"''"}
				children={<>ReactNode</>}
				className={"''"}
				isClosable={false}
				onClick={(_e: React.MouseEvent) => undefined as any}
				closeBtnAriaLabel={"'Close chip group'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
