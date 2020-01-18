// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownItem } from '../DropdownItem';

describe('DropdownItem test', () => {
  it('DropdownItem should match snapshot', () => {
    const view = shallow(
      <DropdownItem
        children={<>ReactNode</>}
				className={"''"}
				listItemClassName={undefined}
				component={<>ReactNode</>}
				variant={'item'}
				isDisabled={false}
				isHovered={false}
				href={"''"}
				tooltip={<>ReactNode</>}
				tooltipProps={{}}
				additionalChild={undefined}
				customChild={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
